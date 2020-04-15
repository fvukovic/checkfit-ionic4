package www.taxi.web_app.websocket;

import com.google.gson.JsonObject;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class SocketHandler extends TextWebSocketHandler
{


    NetworkInputHandler networkInputHandler;

    List<WebSocketSession> sessionsList = new CopyOnWriteArrayList<>();
    private static SocketHandler handler;

    public SocketHandler(){

    }

    //networkinputhandler can't be made in constructor, therefore we need to create it when socket handles it's first message
    private void prepareNetworkInputHandler(){
        if(networkInputHandler == null)
            networkInputHandler = new NetworkInputHandler();
    }

    public static SocketHandler getHandler()
    {
        return handler;
    }

    public static void setHandler(SocketHandler handler)
    {
        SocketHandler.handler = handler;
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException
    {
        prepareNetworkInputHandler();
        System.out.println("recv:"+message.getPayload());
        networkInputHandler.HandleMessage(session, message);
    }

    public void sendMessage(WebSocketSession session, String message)
    {
        try {
            synchronized(session) {
                session.sendMessage(new TextMessage(message));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception
    {
        prepareNetworkInputHandler();
        sessionsList.add(session);

        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("msgType"," MessageTypes.S2C_VOTING_URL_REQUEST");
        session.sendMessage(new TextMessage(jsonObject.toString()));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception
    {
        sessionsList.remove(session);
        networkInputHandler.HandleMessage(session, new TextMessage("{msgType:'INTER_CLIENT_DISCONNECTED'}"));
    }


}
