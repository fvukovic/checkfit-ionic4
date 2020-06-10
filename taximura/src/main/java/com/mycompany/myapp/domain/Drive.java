package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.*;

/**
 * A Drive.
 */
@Entity
@Table(name = "drive")
public class Drive implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "from_lat")
    private String fromLat;

    @Column(name = "from_long")
    private String fromLong;

    @Column(name = "to_lat")
    private String toLat;

    @Column(name = "price")
    private Double price;

    @ManyToOne
    @JsonIgnoreProperties(value = "allDrives", allowSetters = true)
    private UserRel userRel;

    @ManyToOne
    @JsonIgnoreProperties(value = "drives", allowSetters = true)
    private UserRel user;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFromLat() {
        return fromLat;
    }

    public Drive fromLat(String fromLat) {
        this.fromLat = fromLat;
        return this;
    }

    public void setFromLat(String fromLat) {
        this.fromLat = fromLat;
    }

    public String getFromLong() {
        return fromLong;
    }

    public Drive fromLong(String fromLong) {
        this.fromLong = fromLong;
        return this;
    }

    public void setFromLong(String fromLong) {
        this.fromLong = fromLong;
    }

    public String getToLat() {
        return toLat;
    }

    public Drive toLat(String toLat) {
        this.toLat = toLat;
        return this;
    }

    public void setToLat(String toLat) {
        this.toLat = toLat;
    }

    public Double getPrice() {
        return price;
    }

    public Drive price(Double price) {
        this.price = price;
        return this;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public UserRel getUserRel() {
        return userRel;
    }

    public Drive userRel(UserRel userRel) {
        this.userRel = userRel;
        return this;
    }

    public void setUserRel(UserRel userRel) {
        this.userRel = userRel;
    }

    public UserRel getUser() {
        return user;
    }

    public Drive user(UserRel userRel) {
        this.user = userRel;
        return this;
    }

    public void setUser(UserRel userRel) {
        this.user = userRel;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Drive)) {
            return false;
        }
        return id != null && id.equals(((Drive) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Drive{" +
            "id=" + getId() +
            ", fromLat='" + getFromLat() + "'" +
            ", fromLong='" + getFromLong() + "'" +
            ", toLat='" + getToLat() + "'" +
            ", price=" + getPrice() +
            "}";
    }
}
