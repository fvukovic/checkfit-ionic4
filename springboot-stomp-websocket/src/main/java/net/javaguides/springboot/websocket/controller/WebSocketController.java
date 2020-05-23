package net.javaguides.springboot.websocket.controller;

import com.google.gson.Gson;
import net.javaguides.springboot.websocket.model.Message;
import net.javaguides.springboot.websocket.model.StompPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.security.Principal;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Controller
public class WebSocketController
{

    private static final String SENDING_URL = "/topic/server-broadcaster";
    private static final String RECEIVING_URL = "/server-receiver";

    //MESSAGES
    private static final String DRIVE_REQUEST = "DRIVE_REQUEST";
    private static final String ACCEPT_DRIVE = "ACCEPT_DRIVE";
    private static final String FINISH_DRIVE = "FINISH_DRIVE";

    //inform messages
    private static final String INFORM_DRIVE_CUSTOMER = "INFORM_DRIVE_CUSTOMER";
    private static final String INFORM_DRIVE_DRIVER = "INFORM_DRIVE_DRIVER";




    //User types
    private static final String TYPE_CUSTOMER = "customer";
    private static final String TYPE_DRIVER = "driver";

    //current state of
    private List<StompPrincipal> connectedUsers;
    private List<Drive> activeDrives = new ArrayList<>();

    //Non-drive variables
    private final SimpMessagingTemplate template;
    private AtomicLong counter = new AtomicLong(0);
    Gson g = new Gson();
    private String message = "";


    @Autowired
    public WebSocketController(SimpMessagingTemplate template)
    {
        this.connectedUsers = new ArrayList<>();
        this.template = template;
    }

    @MessageMapping(RECEIVING_URL)
    public void onReceivedMessage(Principal user, String message)
    {
        System.out.println("New message received : " + message);
        handleMessage(message, user);
    }

    @SubscribeMapping(SENDING_URL)
    public String onSubscribe()
    {
        return "SUBSCRIBED : " + message;
    }

    @Scheduled(fixedRate = 5000)
    public void sendMessage()
    {
        activeDrives.stream().filter(activeDrive -> activeDrive.isActive()).forEach( activeDrive -> {
            final Message message = activeDrive.toMessage();
            message.setMessageType(INFORM_DRIVE_DRIVER);
            template.convertAndSendToUser(message.getDriver(), SENDING_URL, message);
        });
    }

    private String buildNextMessage()
    {
        message = "Test" + counter.getAndIncrement();
        System.out.println("Send message " + message);
        return message;
    }

    @EventListener(SessionConnectEvent.class)
    public void handleWebsocketConnectListner(SessionConnectEvent event)
    {
        final Map<String, LinkedList<String>> nativeHeaders = (Map<String, LinkedList<String>>) event.getMessage().getHeaders().get("nativeHeaders");
        final StompPrincipal user = (StompPrincipal) event.getUser();
        final String username = nativeHeaders.get("username").get(0);
        final String type = nativeHeaders.get("type").get(0);
        user.setUsername(username);
        user.setType(type);
        connectedUsers.add(user);
    }

    @EventListener(SessionDisconnectEvent.class)
    public void handleWebsocketDisconnectListner(SessionDisconnectEvent event)
    {
        final StompPrincipal stompPrincipal = connectedUsers.stream().filter(user -> user.getName().equals(event.getUser().getName())).findFirst().get();
        connectedUsers.remove(stompPrincipal);
    }

    public void handleMessage(String message, final Principal user)
    {
        Message convertedMessage = g.fromJson(message, Message.class);
        convertedMessage.setUsername(user.getName());
        switch (convertedMessage.getMessageType())
        {
            //FROM Customer
            case DRIVE_REQUEST:
            {
                final Drive drive = Drive.fromMessage(convertedMessage);
                drive.setActive(false);
                activeDrives.add(drive);
                final List<StompPrincipal> freeDrivers = findFreeDrivers();
                for (final StompPrincipal freeDriver : freeDrivers)
                {
                    sendMessage(freeDriver.getName(), convertedMessage);
                }
                break;
            }
                //From Driver
            case ACCEPT_DRIVE:
            {
                final String customer = convertedMessage.getCustomer();
                final Optional<Drive> first = activeDrives.stream().filter(drive1 -> drive1.getCustomer().equals(customer)).findFirst();
                if (first.isPresent())
                {
                    first.get().setActive(true);
                    first.get().setDriver(convertedMessage.getUsername());
                }
                sendMessage(convertedMessage.getUsername(), convertedMessage);
                break;
            }
            case INFORM_DRIVE_DRIVER:{
                convertedMessage.setMessageType(INFORM_DRIVE_CUSTOMER);
                final Optional<Drive> first = activeDrives.stream().filter(drive1 -> drive1.getDriver().equals(convertedMessage.getUsername())).findFirst();
                sendMessage(first.get().getCustomer(), convertedMessage);
                break;
            }
            case FINISH_DRIVE:{
                sendMessage(convertedMessage.getUsername(), convertedMessage);
                break;
            }
        }
    }

    private void sendMessage(final String recipient, final Message convertedMessage)
    {
        template.convertAndSendToUser(recipient, SENDING_URL, convertedMessage);
    }

    private Drive calculateRoute()
    {
        return null;
    }

    private List<StompPrincipal> findFreeDrivers()
    {
        return connectedUsers.stream().filter(user -> TYPE_DRIVER.equals(user.getType())).collect(Collectors.toList());
    }
}
