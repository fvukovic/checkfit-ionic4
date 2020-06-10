package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Drive;
import com.mycompany.myapp.service.DriveService;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.Drive}.
 */
@RestController
@RequestMapping("/api")
public class DriveResource {
    private final Logger log = LoggerFactory.getLogger(DriveResource.class);

    private static final String ENTITY_NAME = "drive";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DriveService driveService;

    public DriveResource(DriveService driveService) {
        this.driveService = driveService;
    }

    /**
     * {@code POST  /drives} : Create a new drive.
     *
     * @param drive the drive to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new drive, or with status {@code 400 (Bad Request)} if the drive has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/drives")
    public ResponseEntity<Drive> createDrive(@RequestBody Drive drive) throws URISyntaxException {
        log.debug("REST request to save Drive : {}", drive);
        if (drive.getId() != null) {
            throw new BadRequestAlertException("A new drive cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Drive result = driveService.save(drive);
        return ResponseEntity
            .created(new URI("/api/drives/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /drives} : Updates an existing drive.
     *
     * @param drive the drive to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated drive,
     * or with status {@code 400 (Bad Request)} if the drive is not valid,
     * or with status {@code 500 (Internal Server Error)} if the drive couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/drives")
    public ResponseEntity<Drive> updateDrive(@RequestBody Drive drive) throws URISyntaxException {
        log.debug("REST request to update Drive : {}", drive);
        if (drive.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Drive result = driveService.save(drive);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, drive.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /drives} : get all the drives.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of drives in body.
     */
    @GetMapping("/drives")
    public List<Drive> getAllDrives() {
        log.debug("REST request to get all Drives");
        return driveService.findAll();
    }

    /**
     * {@code GET  /drives/:id} : get the "id" drive.
     *
     * @param id the id of the drive to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the drive, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/drives/{id}")
    public ResponseEntity<Drive> getDrive(@PathVariable Long id) {
        log.debug("REST request to get Drive : {}", id);
        Optional<Drive> drive = driveService.findOne(id);
        return ResponseUtil.wrapOrNotFound(drive);
    }

    /**
     * {@code DELETE  /drives/:id} : delete the "id" drive.
     *
     * @param id the id of the drive to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/drives/{id}")
    public ResponseEntity<Void> deleteDrive(@PathVariable Long id) {
        log.debug("REST request to delete Drive : {}", id);
        driveService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
