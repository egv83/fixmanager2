package com.ochobits.fixmanager.authentication.infrastructure.security.impl;

import com.ochobits.fixmanager.authentication.infrastructure.interfaces.TokenGenerator;
import com.ochobits.fixmanager.shared.util.ParamReader;
import com.ochobits.fixmanager.user.domain.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class TokenGeneratorImpl implements TokenGenerator {

    private final String jwtSecret;
    private final String campanyName;
    private final Long jwtExpiration;
    private final ParamReader paramReader;

    public TokenGeneratorImpl(ParamReader paramReader) {
        this.jwtSecret = paramReader.getJwtSecret();
        this.campanyName = paramReader.getCompany();
        this.jwtExpiration = paramReader.getJwtExpiration();
        this.paramReader = paramReader;
    }

    @Override
    public String generator(User user) {
        return Jwts.builder()
                .issuer(campanyName)
                .subject(user.getUserName())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSigningKey())
                .compact();
    }

    private Key getSigningKey() {
        System.out.println("TOKEN GEN SECRET: "+jwtSecret);
        byte[] secretByte = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(secretByte);
    }

}
