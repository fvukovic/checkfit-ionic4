package www.taxi.web_app.websocket;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;

@ServerEndpoint(value="/socket.io/1/websocket/{sessionId}")
@CrossOrigin(origins = "*")
public class SocketIOWebSocketHandler {

    @OnOpen
    public void open(Session session) throws IOException, EncodeException
    {

        session.getBasicRemote().sendObject("connect()");

    }

    @OnClose
    public void close(Session session) throws IOException, EncodeException
    {

        session.getBasicRemote().sendObject("close()");

        session.close();

    }

    @OnMessage
    public void message(Session session, String msg) {

        System.out.println(msg);

    }

}