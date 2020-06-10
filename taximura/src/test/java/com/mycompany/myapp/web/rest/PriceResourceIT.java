package com.mycompany.myapp.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.mycompany.myapp.TaximuraApp;
import com.mycompany.myapp.domain.Price;
import com.mycompany.myapp.repository.PriceRepository;
import com.mycompany.myapp.service.PriceService;
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
 * Integration tests for the {@link PriceResource} REST controller.
 */
@SpringBootTest(classes = TaximuraApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class PriceResourceIT {
    private static final Double DEFAULT_AMOUNT = 1D;
    private static final Double UPDATED_AMOUNT = 2D;

    private static final String DEFAULT_FROM_PLACE = "AAAAAAAAAA";
    private static final String UPDATED_FROM_PLACE = "BBBBBBBBBB";

    private static final String DEFAULT_TO_PLACE = "AAAAAAAAAA";
    private static final String UPDATED_TO_PLACE = "BBBBBBBBBB";

    private static final String DEFAULT_FROM_LAT = "AAAAAAAAAA";
    private static final String UPDATED_FROM_LAT = "BBBBBBBBBB";

    private static final String DEFAULT_FROM_LONG = "AAAAAAAAAA";
    private static final String UPDATED_FROM_LONG = "BBBBBBBBBB";

    private static final String DEFAULT_TO_LAT = "AAAAAAAAAA";
    private static final String UPDATED_TO_LAT = "BBBBBBBBBB";

    @Autowired
    private PriceRepository priceRepository;

    @Autowired
    private PriceService priceService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restPriceMockMvc;

    private Price price;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Price createEntity(EntityManager em) {
        Price price = new Price()
            .amount(DEFAULT_AMOUNT)
            .fromPlace(DEFAULT_FROM_PLACE)
            .toPlace(DEFAULT_TO_PLACE)
            .fromLat(DEFAULT_FROM_LAT)
            .fromLong(DEFAULT_FROM_LONG)
            .toLat(DEFAULT_TO_LAT);
        return price;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Price createUpdatedEntity(EntityManager em) {
        Price price = new Price()
            .amount(UPDATED_AMOUNT)
            .fromPlace(UPDATED_FROM_PLACE)
            .toPlace(UPDATED_TO_PLACE)
            .fromLat(UPDATED_FROM_LAT)
            .fromLong(UPDATED_FROM_LONG)
            .toLat(UPDATED_TO_LAT);
        return price;
    }

    @BeforeEach
    public void initTest() {
        price = createEntity(em);
    }

    @Test
    @Transactional
    public void createPrice() throws Exception {
        int databaseSizeBeforeCreate = priceRepository.findAll().size();
        // Create the Price
        restPriceMockMvc
            .perform(post("/api/prices").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(price)))
            .andExpect(status().isCreated());

        // Validate the Price in the database
        List<Price> priceList = priceRepository.findAll();
        assertThat(priceList).hasSize(databaseSizeBeforeCreate + 1);
        Price testPrice = priceList.get(priceList.size() - 1);
        assertThat(testPrice.getAmount()).isEqualTo(DEFAULT_AMOUNT);
        assertThat(testPrice.getFromPlace()).isEqualTo(DEFAULT_FROM_PLACE);
        assertThat(testPrice.getToPlace()).isEqualTo(DEFAULT_TO_PLACE);
        assertThat(testPrice.getFromLat()).isEqualTo(DEFAULT_FROM_LAT);
        assertThat(testPrice.getFromLong()).isEqualTo(DEFAULT_FROM_LONG);
        assertThat(testPrice.getToLat()).isEqualTo(DEFAULT_TO_LAT);
    }

    @Test
    @Transactional
    public void createPriceWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = priceRepository.findAll().size();

        // Create the Price with an existing ID
        price.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restPriceMockMvc
            .perform(post("/api/prices").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(price)))
            .andExpect(status().isBadRequest());

        // Validate the Price in the database
        List<Price> priceList = priceRepository.findAll();
        assertThat(priceList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllPrices() throws Exception {
        // Initialize the database
        priceRepository.saveAndFlush(price);

        // Get all the priceList
        restPriceMockMvc
            .perform(get("/api/prices?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(price.getId().intValue())))
            .andExpect(jsonPath("$.[*].amount").value(hasItem(DEFAULT_AMOUNT.doubleValue())))
            .andExpect(jsonPath("$.[*].fromPlace").value(hasItem(DEFAULT_FROM_PLACE)))
            .andExpect(jsonPath("$.[*].toPlace").value(hasItem(DEFAULT_TO_PLACE)))
            .andExpect(jsonPath("$.[*].fromLat").value(hasItem(DEFAULT_FROM_LAT)))
            .andExpect(jsonPath("$.[*].fromLong").value(hasItem(DEFAULT_FROM_LONG)))
            .andExpect(jsonPath("$.[*].toLat").value(hasItem(DEFAULT_TO_LAT)));
    }

    @Test
    @Transactional
    public void getPrice() throws Exception {
        // Initialize the database
        priceRepository.saveAndFlush(price);

        // Get the price
        restPriceMockMvc
            .perform(get("/api/prices/{id}", price.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(price.getId().intValue()))
            .andExpect(jsonPath("$.amount").value(DEFAULT_AMOUNT.doubleValue()))
            .andExpect(jsonPath("$.fromPlace").value(DEFAULT_FROM_PLACE))
            .andExpect(jsonPath("$.toPlace").value(DEFAULT_TO_PLACE))
            .andExpect(jsonPath("$.fromLat").value(DEFAULT_FROM_LAT))
            .andExpect(jsonPath("$.fromLong").value(DEFAULT_FROM_LONG))
            .andExpect(jsonPath("$.toLat").value(DEFAULT_TO_LAT));
    }

    @Test
    @Transactional
    public void getNonExistingPrice() throws Exception {
        // Get the price
        restPriceMockMvc.perform(get("/api/prices/{id}", Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updatePrice() throws Exception {
        // Initialize the database
        priceService.save(price);

        int databaseSizeBeforeUpdate = priceRepository.findAll().size();

        // Update the price
        Price updatedPrice = priceRepository.findById(price.getId()).get();
        // Disconnect from session so that the updates on updatedPrice are not directly saved in db
        em.detach(updatedPrice);
        updatedPrice
            .amount(UPDATED_AMOUNT)
            .fromPlace(UPDATED_FROM_PLACE)
            .toPlace(UPDATED_TO_PLACE)
            .fromLat(UPDATED_FROM_LAT)
            .fromLong(UPDATED_FROM_LONG)
            .toLat(UPDATED_TO_LAT);

        restPriceMockMvc
            .perform(put("/api/prices").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(updatedPrice)))
            .andExpect(status().isOk());

        // Validate the Price in the database
        List<Price> priceList = priceRepository.findAll();
        assertThat(priceList).hasSize(databaseSizeBeforeUpdate);
        Price testPrice = priceList.get(priceList.size() - 1);
        assertThat(testPrice.getAmount()).isEqualTo(UPDATED_AMOUNT);
        assertThat(testPrice.getFromPlace()).isEqualTo(UPDATED_FROM_PLACE);
        assertThat(testPrice.getToPlace()).isEqualTo(UPDATED_TO_PLACE);
        assertThat(testPrice.getFromLat()).isEqualTo(UPDATED_FROM_LAT);
        assertThat(testPrice.getFromLong()).isEqualTo(UPDATED_FROM_LONG);
        assertThat(testPrice.getToLat()).isEqualTo(UPDATED_TO_LAT);
    }

    @Test
    @Transactional
    public void updateNonExistingPrice() throws Exception {
        int databaseSizeBeforeUpdate = priceRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPriceMockMvc
            .perform(put("/api/prices").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(price)))
            .andExpect(status().isBadRequest());

        // Validate the Price in the database
        List<Price> priceList = priceRepository.findAll();
        assertThat(priceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deletePrice() throws Exception {
        // Initialize the database
        priceService.save(price);

        int databaseSizeBeforeDelete = priceRepository.findAll().size();

        // Delete the price
        restPriceMockMvc
            .perform(delete("/api/prices/{id}", price.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Price> priceList = priceRepository.findAll();
        assertThat(priceList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
