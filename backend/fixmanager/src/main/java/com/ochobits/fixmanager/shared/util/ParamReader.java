package com.ochobits.fixmanager.shared.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ParamReader {

    @Value("${security.jwt.key}")
    private String jwtSecret;

    @Value("${security.jwt.expiration}")
    private Long jwtExpiration;

    @Value("${company.name}")
    private String company;

    public String getJwtSecret() {
        return jwtSecret;
    }

    public Long getJwtExpiration() {
        return jwtExpiration;
    }

    public String getCompany() {
        return company;
    }

}
