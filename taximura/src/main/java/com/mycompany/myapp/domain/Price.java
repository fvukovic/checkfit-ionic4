package com.mycompany.myapp.domain;

import java.io.Serializable;
import javax.persistence.*;

/**
 * A Price.
 */
@Entity
@Table(name = "price")
public class Price implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "from_place")
    private String fromPlace;

    @Column(name = "to_place")
    private String toPlace;

    @Column(name = "from_lat")
    private String fromLat;

    @Column(name = "from_long")
    private String fromLong;

    @Column(name = "to_lat")
    private String toLat;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public Price amount(Double amount) {
        this.amount = amount;
        return this;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getFromPlace() {
        return fromPlace;
    }

    public Price fromPlace(String fromPlace) {
        this.fromPlace = fromPlace;
        return this;
    }

    public void setFromPlace(String fromPlace) {
        this.fromPlace = fromPlace;
    }

    public String getToPlace() {
        return toPlace;
    }

    public Price toPlace(String toPlace) {
        this.toPlace = toPlace;
        return this;
    }

    public void setToPlace(String toPlace) {
        this.toPlace = toPlace;
    }

    public String getFromLat() {
        return fromLat;
    }

    public Price fromLat(String fromLat) {
        this.fromLat = fromLat;
        return this;
    }

    public void setFromLat(String fromLat) {
        this.fromLat = fromLat;
    }

    public String getFromLong() {
        return fromLong;
    }

    public Price fromLong(String fromLong) {
        this.fromLong = fromLong;
        return this;
    }

    public void setFromLong(String fromLong) {
        this.fromLong = fromLong;
    }

    public String getToLat() {
        return toLat;
    }

    public Price toLat(String toLat) {
        this.toLat = toLat;
        return this;
    }

    public void setToLat(String toLat) {
        this.toLat = toLat;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Price)) {
            return false;
        }
        return id != null && id.equals(((Price) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Price{" +
            "id=" + getId() +
            ", amount=" + getAmount() +
            ", fromPlace='" + getFromPlace() + "'" +
            ", toPlace='" + getToPlace() + "'" +
            ", fromLat='" + getFromLat() + "'" +
            ", fromLong='" + getFromLong() + "'" +
            ", toLat='" + getToLat() + "'" +
            "}";
    }
}
