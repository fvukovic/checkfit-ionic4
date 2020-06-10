package com.mycompany.myapp.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.mycompany.myapp.TaximuraApp;
import com.mycompany.myapp.domain.Drive;
import com.mycompany.myapp.repository.DriveRepository;
import com.mycompany.myapp.service.DriveService;
import java.util.List;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link DriveResource} REST controller.
 */
@SpringBootTest(classes = TaximuraApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class DriveResourceIT {
    private static final String DEFAULT_FROM_LAT = "AAAAAAAAAA";
    private static final String UPDATED_FROM_LAT = "BBBBBBBBBB";

    private static final String DEFAULT_FROM_LONG = "AAAAAAAAAA";
    private static final String UPDATED_FROM_LONG = "BBBBBBBBBB";

    private static final String DEFAULT_TO_LAT = "AAAAAAAAAA";
    private static final String UPDATED_TO_LAT = "BBBBBBBBBB";

    private static final Double DEFAULT_PRICE = 1D;
    private static final Double UPDATED_PRICE = 2D;

    @Autowired
    private DriveRepository driveRepository;

    @Autowired
    private DriveService driveService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDriveMockMvc;

    private Drive drive;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Drive createEntity(EntityManager em) {
        Drive drive = new Drive().fromLat(DEFAULT_FROM_LAT).fromLong(DEFAULT_FROM_LONG).toLat(DEFAULT_TO_LAT).price(DEFAULT_PRICE);
        return drive;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Drive createUpdatedEntity(EntityManager em) {
        Drive drive = new Drive().fromLat(UPDATED_FROM_LAT).fromLong(UPDATED_FROM_LONG).toLat(UPDATED_TO_LAT).price(UPDATED_PRICE);
        return drive;
    }

    @BeforeEach
    public void initTest() {
        drive = createEntity(em);
    }

    @Test
    @Transactional
    public void createDrive() throws Exception {
        int databaseSizeBeforeCreate = driveRepository.findAll().size();
        // Create the Drive
        restDriveMockMvc
            .perform(post("/api/drives").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(drive)))
            .andExpect(status().isCreated());

        // Validate the Drive in the database
        List<Drive> driveList = driveRepository.findAll();
        assertThat(driveList).hasSize(databaseSizeBeforeCreate + 1);
        Drive testDrive = driveList.get(driveList.size() - 1);
        assertThat(testDrive.getFromLat()).isEqualTo(DEFAULT_FROM_LAT);
        assertThat(testDrive.getFromLong()).isEqualTo(DEFAULT_FROM_LONG);
        assertThat(testDrive.getToLat()).isEqualTo(DEFAULT_TO_LAT);
        assertThat(testDrive.getPrice()).isEqualTo(DEFAULT_PRICE);
    }

    @Test
    @Transactional
    public void createDriveWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = driveRepository.findAll().size();

        // Create the Drive with an existing ID
        drive.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDriveMockMvc
            .perform(post("/api/drives").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(drive)))
            .andExpect(status().isBadRequest());

        // Validate the Drive in the database
        List<Drive> driveList = driveRepository.findAll();
        assertThat(driveList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllDrives() throws Exception {
        // Initialize the database
        driveRepository.saveAndFlush(drive);

        // Get all the driveList
        restDriveMockMvc
            .perform(get("/api/drives?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(drive.getId().intValue())))
            .andExpect(jsonPath("$.[*].fromLat").value(hasItem(DEFAULT_FROM_LAT)))
            .andExpect(jsonPath("$.[*].fromLong").value(hasItem(DEFAULT_FROM_LONG)))
            .andExpect(jsonPath("$.[*].toLat").value(hasItem(DEFAULT_TO_LAT)))
            .andExpect(jsonPath("$.[*].price").value(hasItem(DEFAULT_PRICE.doubleValue())));
    }

    @Test
    @Transactional
    public void getDrive() throws Exception {
        // Initialize the database
        driveRepository.saveAndFlush(drive);

        // Get the drive
        restDriveMockMvc
            .perform(get("/api/drives/{id}", drive.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(drive.getId().intValue()))
            .andExpect(jsonPath("$.fromLat").value(DEFAULT_FROM_LAT))
            .andExpect(jsonPath("$.fromLong").value(DEFAULT_FROM_LONG))
            .andExpect(jsonPath("$.toLat").value(DEFAULT_TO_LAT))
            .andExpect(jsonPath("$.price").value(DEFAULT_PRICE.doubleValue()));
    }

    @Test
    @Transactional
    public void getNonExistingDrive() throws Exception {
        // Get the drive
        restDriveMockMvc.perform(get("/api/drives/{id}", Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDrive() throws Exception {
        // Initialize the database
        driveService.save(drive);

        int databaseSizeBeforeUpdate = driveRepository.findAll().size();

        // Update the drive
        Drive updatedDrive = driveRepository.findById(drive.getId()).get();
        // Disconnect from session so that the updates on updatedDrive are not directly saved in db
        em.detach(updatedDrive);
        updatedDrive.fromLat(UPDATED_FROM_LAT).fromLong(UPDATED_FROM_LONG).toLat(UPDATED_TO_LAT).price(UPDATED_PRICE);

        restDriveMockMvc
            .perform(put("/api/drives").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(updatedDrive)))
            .andExpect(status().isOk());

        // Validate the Drive in the database
        List<Drive> driveList = driveRepository.findAll();
        assertThat(driveList).hasSize(databaseSizeBeforeUpdate);
        Drive testDrive = driveList.get(driveList.size() - 1);
        assertThat(testDrive.getFromLat()).isEqualTo(UPDATED_FROM_LAT);
        assertThat(testDrive.getFromLong()).isEqualTo(UPDATED_FROM_LONG);
        assertThat(testDrive.getToLat()).isEqualTo(UPDATED_TO_LAT);
        assertThat(testDrive.getPrice()).isEqualTo(UPDATED_PRICE);
    }

    @Test
    @Transactional
    public void updateNonExistingDrive() throws Exception {
        int databaseSizeBeforeUpdate = driveRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDriveMockMvc
            .perform(put("/api/drives").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(drive)))
            .andExpect(status().isBadRequest());

        // Validate the Drive in the database
        List<Drive> driveList = driveRepository.findAll();
        assertThat(driveList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDrive() throws Exception {
        // Initialize the database
        driveService.save(drive);

        int databaseSizeBeforeDelete = driveRepository.findAll().size();

        // Delete the drive
        restDriveMockMvc
            .perform(delete("/api/drives/{id}", drive.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Drive> driveList = driveRepository.findAll();
        assertThat(driveList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
