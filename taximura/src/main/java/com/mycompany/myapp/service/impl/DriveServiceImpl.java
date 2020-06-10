package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.domain.Drive;
import com.mycompany.myapp.repository.DriveRepository;
import com.mycompany.myapp.service.DriveService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Drive}.
 */
@Service
@Transactional
public class DriveServiceImpl implements DriveService {
    private final Logger log = LoggerFactory.getLogger(DriveServiceImpl.class);

    private final DriveRepository driveRepository;

    public DriveServiceImpl(DriveRepository driveRepository) {
        this.driveRepository = driveRepository;
    }

    /**
     * Save a drive.
     *
     * @param drive the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Drive save(Drive drive) {
        log.debug("Request to save Drive : {}", drive);
        return driveRepository.save(drive);
    }

    /**
     * Get all the drives.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Drive> findAll() {
        log.debug("Request to get all Drives");
        return driveRepository.findAll();
    }

    /**
     * Get one drive by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Drive> findOne(Long id) {
        log.debug("Request to get Drive : {}", id);
        return driveRepository.findById(id);
    }

    /**
     * Delete the drive by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Drive : {}", id);
        driveRepository.deleteById(id);
    }
}
