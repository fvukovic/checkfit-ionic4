package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.UserRel;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link UserRel}.
 */
public interface UserRelService {
    /**
     * Save a userRel.
     *
     * @param userRel the entity to save.
     * @return the persisted entity.
     */
    UserRel save(UserRel userRel);

    /**
     * Get all the userRels.
     *
     * @return the list of entities.
     */
    List<UserRel> findAll();

    /**
     * Get the "id" userRel.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<UserRel> findOne(Long id);

    /**
     * Delete the "id" userRel.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
