package com.mycompany.myapp.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 * A UserRel.
 */
@Entity
@Table(name = "user_rel")
public class UserRel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user")
    private Long user;

    @OneToMany(mappedBy = "user")
    private Set<Drive> drives = new HashSet<>();

    @OneToMany(mappedBy = "userRel")
    private Set<Drive> allDrives = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser() {
        return user;
    }

    public UserRel user(Long user) {
        this.user = user;
        return this;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public Set<Drive> getDrives() {
        return drives;
    }

    public UserRel drives(Set<Drive> drives) {
        this.drives = drives;
        return this;
    }

    public UserRel addDrive(Drive drive) {
        this.drives.add(drive);
        drive.setUser(this);
        return this;
    }

    public UserRel removeDrive(Drive drive) {
        this.drives.remove(drive);
        drive.setUser(null);
        return this;
    }

    public void setDrives(Set<Drive> drives) {
        this.drives = drives;
    }

    public Set<Drive> getAllDrives() {
        return allDrives;
    }

    public UserRel allDrives(Set<Drive> drives) {
        this.allDrives = drives;
        return this;
    }

    public UserRel addAllDrives(Drive drive) {
        this.allDrives.add(drive);
        drive.setUserRel(this);
        return this;
    }

    public UserRel removeAllDrives(Drive drive) {
        this.allDrives.remove(drive);
        drive.setUserRel(null);
        return this;
    }

    public void setAllDrives(Set<Drive> drives) {
        this.allDrives = drives;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserRel)) {
            return false;
        }
        return id != null && id.equals(((UserRel) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserRel{" +
            "id=" + getId() +
            ", user=" + getUser() +
            "}";
    }
}
