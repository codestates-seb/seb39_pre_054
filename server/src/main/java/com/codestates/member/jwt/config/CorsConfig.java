package com.codestates.member.jwt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration // Bean 등록
public class CorsConfig { //CorsConfig의 역할??

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true); // 서버가 응답할 때 json을 자바스크립트에서 처리할 수 있게 설정
        config.addAllowedOriginPattern("*"); // 모든 ip에 응답 허용
        config.addAllowedHeader("*"); // 모든 header에 응답 허용
        config.addAllowedMethod("*"); // 모든 post, get, patch, delete 요청 허용

        config.addExposedHeader("Authorization");
        config.addExposedHeader("memberId");

        source.registerCorsConfiguration("/v1/**", config);
        return new CorsFilter(source);
    }
}
