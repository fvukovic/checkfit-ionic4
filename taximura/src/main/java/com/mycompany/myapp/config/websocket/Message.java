package com.mycompany.myapp.config.websocket;

import java.util.List;

public class Message {
    private String username;
    private String type;
    private String messageType;
    private String fromLat;
    private String fromLong;
    private String toLat;
    private String toLong;
    private String customer;
    private String driver;
    private String phoneNumber;
    private List<Drive> drives;

    // getters and setters

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

    public String getMessageType() {
        return messageType;
    }

    public void setMessageType(final String messageType) {
        this.messageType = messageType;
    }

    public String getFromLat() {
        return fromLat;
    }

    public void setFromLat(final String fromLat) {
        this.fromLat = fromLat;
    }

    public String getFromLong() {
        return fromLong;
    }

    public void setFromLong(final String fromLong) {
        this.fromLong = fromLong;
    }

    public String getToLat() {
        return toLat;
    }

    public void setToLat(final String toLat) {
        this.toLat = toLat;
    }

    public String getToLong() {
        return toLong;
    }

    public void setToLong(final String toLong) {
        this.toLong = toLong;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(final String customer) {
        this.customer = customer;
    }

    public String getDriver() {
        return driver;
    }

    public void setDriver(final String driver) {
        this.driver = driver;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Drive> getDrives() {
        return drives;
    }

    public void setDrives(List<Drive> drives) {
        this.drives = drives;
    }
}
