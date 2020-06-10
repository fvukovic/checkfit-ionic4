package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.UserRel;
import com.mycompany.myapp.service.UserRelService;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.UserRel}.
 */
@RestController
@RequestMapping("/api")
public class UserRelResource {
    private final Logger log = LoggerFactory.getLogger(UserRelResource.class);

    private static final String ENTITY_NAME = "userRel";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UserRelService userRelService;

    public UserRelResource(UserRelService userRelService) {
        this.userRelService = userRelService;
    }

    /**
     * {@code POST  /user-rels} : Create a new userRel.
     *
     * @param userRel the userRel to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new userRel, or with status {@code 400 (Bad Request)} if the userRel has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/user-rels")
    public ResponseEntity<UserRel> createUserRel(@RequestBody UserRel userRel) throws URISyntaxException {
        log.debug("REST request to save UserRel : {}", userRel);
        if (userRel.getId() != null) {
            throw new BadRequestAlertException("A new userRel cannot already have an ID", ENTITY_NAME, "idexists");
        }
        UserRel result = userRelService.save(userRel);
        return ResponseEntity
            .created(new URI("/api/user-rels/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /user-rels} : Updates an existing userRel.
     *
     * @param userRel the userRel to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated userRel,
     * or with status {@code 400 (Bad Request)} if the userRel is not valid,
     * or with status {@code 500 (Internal Server Error)} if the userRel couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/user-rels")
    public ResponseEntity<UserRel> updateUserRel(@RequestBody UserRel userRel) throws URISyntaxException {
        log.debug("REST request to update UserRel : {}", userRel);
        if (userRel.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        UserRel result = userRelService.save(userRel);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, userRel.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /user-rels} : get all the userRels.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of userRels in body.
     */
    @GetMapping("/user-rels")
    public List<UserRel> getAllUserRels() {
        log.debug("REST request to get all UserRels");
        return userRelService.findAll();
    }

    /**
     * {@code GET  /user-rels/:id} : get the "id" userRel.
     *
     * @param id the id of the userRel to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the userRel, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/user-rels/{id}")
    public ResponseEntity<UserRel> getUserRel(@PathVariable Long id) {
        log.debug("REST request to get UserRel : {}", id);
        Optional<UserRel> userRel = userRelService.findOne(id);
        return ResponseUtil.wrapOrNotFound(userRel);
    }

    /**
     * {@code DELETE  /user-rels/:id} : delete the "id" userRel.
     *
     * @param id the id of the userRel to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/user-rels/{id}")
    public ResponseEntity<Void> deleteUserRel(@PathVariable Long id) {
        log.debug("REST request to delete UserRel : {}", id);
        userRelService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
