package net.javaguides.springboot.websocket.model;

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

    
    List<WebSocketSession> sessionsList = new CopyOnWriteArrayList<>();
    private static SocketHandler handler;
    
    public SocketHandler(){
    
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
        sessionsList.add(session);

    }
    
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception
    {
    	sessionsList.remove(session);
    }
}