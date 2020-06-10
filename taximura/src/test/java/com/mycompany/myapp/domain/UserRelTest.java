package com.mycompany.myapp.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

public class UserRelTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(UserRel.class);
        UserRel userRel1 = new UserRel();
        userRel1.setId(1L);
        UserRel userRel2 = new UserRel();
        userRel2.setId(userRel1.getId());
        assertThat(userRel1).isEqualTo(userRel2);
        userRel2.setId(2L);
        assertThat(userRel1).isNotEqualTo(userRel2);
        userRel1.setId(null);
        assertThat(userRel1).isNotEqualTo(userRel2);
    }
}
