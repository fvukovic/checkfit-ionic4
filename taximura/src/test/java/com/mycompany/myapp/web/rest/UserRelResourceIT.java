package com.mycompany.myapp.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.mycompany.myapp.TaximuraApp;
import com.mycompany.myapp.domain.UserRel;
import com.mycompany.myapp.repository.UserRelRepository;
import com.mycompany.myapp.service.UserRelService;
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
 * Integration tests for the {@link UserRelResource} REST controller.
 */
@SpringBootTest(classes = TaximuraApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class UserRelResourceIT {
    private static final Long DEFAULT_USER = 1L;
    private static final Long UPDATED_USER = 2L;

    @Autowired
    private UserRelRepository userRelRepository;

    @Autowired
    private UserRelService userRelService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restUserRelMockMvc;

    private UserRel userRel;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserRel createEntity(EntityManager em) {
        UserRel userRel = new UserRel().user(DEFAULT_USER);
        return userRel;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserRel createUpdatedEntity(EntityManager em) {
        UserRel userRel = new UserRel().user(UPDATED_USER);
        return userRel;
    }

    @BeforeEach
    public void initTest() {
        userRel = createEntity(em);
    }

    @Test
    @Transactional
    public void createUserRel() throws Exception {
        int databaseSizeBeforeCreate = userRelRepository.findAll().size();
        // Create the UserRel
        restUserRelMockMvc
            .perform(post("/api/user-rels").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(userRel)))
            .andExpect(status().isCreated());

        // Validate the UserRel in the database
        List<UserRel> userRelList = userRelRepository.findAll();
        assertThat(userRelList).hasSize(databaseSizeBeforeCreate + 1);
        UserRel testUserRel = userRelList.get(userRelList.size() - 1);
        assertThat(testUserRel.getUser()).isEqualTo(DEFAULT_USER);
    }

    @Test
    @Transactional
    public void createUserRelWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = userRelRepository.findAll().size();

        // Create the UserRel with an existing ID
        userRel.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restUserRelMockMvc
            .perform(post("/api/user-rels").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(userRel)))
            .andExpect(status().isBadRequest());

        // Validate the UserRel in the database
        List<UserRel> userRelList = userRelRepository.findAll();
        assertThat(userRelList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllUserRels() throws Exception {
        // Initialize the database
        userRelRepository.saveAndFlush(userRel);

        // Get all the userRelList
        restUserRelMockMvc
            .perform(get("/api/user-rels?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(userRel.getId().intValue())))
            .andExpect(jsonPath("$.[*].user").value(hasItem(DEFAULT_USER.intValue())));
    }

    @Test
    @Transactional
    public void getUserRel() throws Exception {
        // Initialize the database
        userRelRepository.saveAndFlush(userRel);

        // Get the userRel
        restUserRelMockMvc
            .perform(get("/api/user-rels/{id}", userRel.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(userRel.getId().intValue()))
            .andExpect(jsonPath("$.user").value(DEFAULT_USER.intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingUserRel() throws Exception {
        // Get the userRel
        restUserRelMockMvc.perform(get("/api/user-rels/{id}", Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateUserRel() throws Exception {
        // Initialize the database
        userRelService.save(userRel);

        int databaseSizeBeforeUpdate = userRelRepository.findAll().size();

        // Update the userRel
        UserRel updatedUserRel = userRelRepository.findById(userRel.getId()).get();
        // Disconnect from session so that the updates on updatedUserRel are not directly saved in db
        em.detach(updatedUserRel);
        updatedUserRel.user(UPDATED_USER);

        restUserRelMockMvc
            .perform(
                put("/api/user-rels").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(updatedUserRel))
            )
            .andExpect(status().isOk());

        // Validate the UserRel in the database
        List<UserRel> userRelList = userRelRepository.findAll();
        assertThat(userRelList).hasSize(databaseSizeBeforeUpdate);
        UserRel testUserRel = userRelList.get(userRelList.size() - 1);
        assertThat(testUserRel.getUser()).isEqualTo(UPDATED_USER);
    }

    @Test
    @Transactional
    public void updateNonExistingUserRel() throws Exception {
        int databaseSizeBeforeUpdate = userRelRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restUserRelMockMvc
            .perform(put("/api/user-rels").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(userRel)))
            .andExpect(status().isBadRequest());

        // Validate the UserRel in the database
        List<UserRel> userRelList = userRelRepository.findAll();
        assertThat(userRelList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteUserRel() throws Exception {
        // Initialize the database
        userRelService.save(userRel);

        int databaseSizeBeforeDelete = userRelRepository.findAll().size();

        // Delete the userRel
        restUserRelMockMvc
            .perform(delete("/api/user-rels/{id}", userRel.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<UserRel> userRelList = userRelRepository.findAll();
        assertThat(userRelList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
