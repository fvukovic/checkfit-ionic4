package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Drive;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Drive}.
 */
public interface DriveService {
    /**
     * Save a drive.
     *
     * @param drive the entity to save.
     * @return the persisted entity.
     */
    Drive save(Drive drive);

    /**
     * Get all the drives.
     *
     * @return the list of entities.
     */
    List<Drive> findAll();

    /**
     * Get the "id" drive.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Drive> findOne(Long id);

    /**
     * Delete the "id" drive.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
