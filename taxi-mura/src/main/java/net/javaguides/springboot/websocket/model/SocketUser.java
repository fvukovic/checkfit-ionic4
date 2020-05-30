package net.javaguides.springboot.websocket.model;

public class SocketUser
{
    private String sessionID;
    private String username;

    public String getSessionID()
    {
        return sessionID;
    }

    public void setSessionID(final String sessionID)
    {
        this.sessionID = sessionID;
    }
}
