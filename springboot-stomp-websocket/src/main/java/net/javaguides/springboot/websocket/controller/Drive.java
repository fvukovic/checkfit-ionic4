package net.javaguides.springboot.websocket.controller;


import net.javaguides.springboot.websocket.model.Message;

public class Drive
{
    private String fromLat;
    private String fromLong;
    private String toLat;
    private String toLong;
    private String customer;
    private String driver;
    private boolean active;

    public String getFromLat()
    {
        return fromLat;
    }

    public void setFromLat(final String fromLat)
    {
        this.fromLat = fromLat;
    }

    public String getFromLong()
    {
        return fromLong;
    }

    public void setFromLong(final String fromLong)
    {
        this.fromLong = fromLong;
    }

    public String getToLat()
    {
        return toLat;
    }

    public void setToLat(final String toLat)
    {
        this.toLat = toLat;
    }

    public String getToLong()
    {
        return toLong;
    }

    public void setToLong(final String toLong)
    {
        this.toLong = toLong;
    }

    public String getCustomer()
    {
        return customer;
    }

    public void setCustomer(final String customer)
    {
        this.customer = customer;
    }

    public String getDriver()
    {
        return driver;
    }

    public void setDriver(final String driver)
    {
        this.driver = driver;
    }

    public boolean isActive()
    {
        return active;
    }

    public void setActive(final boolean active)
    {
        this.active = active;
    }

    public static Drive fromMessage(Message message){
        Drive drive = new Drive();
        drive.setFromLat(message.getFromLat());
        drive.setFromLong(message.getFromLong());
        drive.setToLat(message.getToLat());
        drive.setToLong(message.getToLat());
        drive.setCustomer(message.getUsername());
        return drive;
    }

    public  Message toMessage(){
        Message message = new Message();
        message.setFromLat(this.getFromLat());
        message.setFromLong(this.getFromLong());
        message.setToLat(this.getToLat());
        message.setToLong(this.getToLat());
        message.setUsername(this.getCustomer());
        message.setDriver(this.getDriver());
        return message;
    }


}
