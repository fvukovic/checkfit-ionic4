package com.mycompany.myapp.config;

import com.mycompany.myapp.config.websocket.StompPrincipal;
import java.security.Principal;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

public class SocketHandler extends DefaultHandshakeHandler {

    @Override
    protected Principal determineUser(ServerHttpRequest request, WebSocketHandler wsHandler, Map<String, Object> attributes) {
        return new StompPrincipal(UUID.randomUUID().toString());
    }
}
