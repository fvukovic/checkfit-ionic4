package net.javaguides.springboot.websocket.model;

import java.security.Principal;

public class StompPrincipal implements Principal
{
    String name;
    String username;
    String type;

    public StompPrincipal(String name) {
        this.name = name;
    }

    public void setName(final String name)
    {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(final String username)
    {
        this.username = username;
    }

    public String getType()
    {
        return type;
    }

    public void setType(final String type)
    {
        this.type = type;
    }
}