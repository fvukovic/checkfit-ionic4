package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.UserRel;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the UserRel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserRelRepository extends JpaRepository<UserRel, Long> {}
