package com.mycompany.myapp.config.websocket;

import java.security.Principal;

public class StompPrincipal implements Principal {
    String name;
    String username;
    String type;
    boolean free;

    public StompPrincipal(String name) {
        this.name = name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getType() {
        return type;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public boolean isFree() {
        return free;
    }

    public void setFree(final boolean free) {
        this.free = free;
    }
}
