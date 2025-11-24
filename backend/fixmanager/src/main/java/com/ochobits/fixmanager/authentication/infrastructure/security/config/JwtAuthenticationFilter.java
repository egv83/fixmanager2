package com.ochobits.fixmanager.authentication.infrastructure.security.config;

import com.ochobits.fixmanager.shared.util.ParamReader;
import com.ochobits.fixmanager.user.domain.service.Interfaces.UserFindService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.impl.lang.Function;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.Objects;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    private final String jwtSecret;
    private final UserFindService userFindService;


    public JwtAuthenticationFilter(ParamReader paramReader, UserFindService userFindService) {

        this.jwtSecret = paramReader.getJwtSecret();
        this.userFindService = userFindService;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String tokenHeader = request.getHeader("Authorization");
        if(Objects.isNull(tokenHeader) || !tokenHeader.startsWith("Bearer ")){
            logger.warn("No hay token de autenticacion");
            filterChain.doFilter(request,response);
            return;
        }

        String jwtToken = tokenHeader.substring(7);
        Claims claims = (Claims) Jwts.parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(jwtToken)
                .getPayload();

        var userName = getSpecificClaims(claims, Claims::getSubject);
        var userOpt = userFindService.findUserByUserName(userName);
        if(Objects.isNull(userOpt)){
            logger.error("No existe el usuario propietario del token");
            filterChain.doFilter(request,response);
            return;
        }

        var userDetails = AuthUserDetails.builder()
                .userName(userOpt.getUserName())
                .password(null)
                .build();

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
          userDetails,null,userDetails.getAuthorities()
        );

        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        MDC.put("userName",userOpt.getUserName());
        filterChain.doFilter(request,response);

    }

    private String getSpecificClaims(Claims claims, Function<Claims,String> claimsResolver){
        return claimsResolver.apply(claims);
    }

    private SecretKey getSigninKey(){
        byte[] secretByte = Decoders.BASE64URL.decode(jwtSecret);
        return Keys.hmacShaKeyFor(secretByte);
    }
}
