package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.domain.UserRel;
import com.mycompany.myapp.repository.UserRelRepository;
import com.mycompany.myapp.service.UserRelService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link UserRel}.
 */
@Service
@Transactional
public class UserRelServiceImpl implements UserRelService {
    private final Logger log = LoggerFactory.getLogger(UserRelServiceImpl.class);

    private final UserRelRepository userRelRepository;

    public UserRelServiceImpl(UserRelRepository userRelRepository) {
        this.userRelRepository = userRelRepository;
    }

    /**
     * Save a userRel.
     *
     * @param userRel the entity to save.
     * @return the persisted entity.
     */
    @Override
    public UserRel save(UserRel userRel) {
        log.debug("Request to save UserRel : {}", userRel);
        return userRelRepository.save(userRel);
    }

    /**
     * Get all the userRels.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<UserRel> findAll() {
        log.debug("Request to get all UserRels");
        return userRelRepository.findAll();
    }

    /**
     * Get one userRel by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<UserRel> findOne(Long id) {
        log.debug("Request to get UserRel : {}", id);
        return userRelRepository.findById(id);
    }

    /**
     * Delete the userRel by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete UserRel : {}", id);
        userRelRepository.deleteById(id);
    }
}
