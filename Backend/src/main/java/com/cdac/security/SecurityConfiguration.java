package com.cdac.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.AllArgsConstructor;

@Configuration // to declare the as java config class
// equivalent to bean config xml file
@EnableWebSecurity // to enable spring sec config in this class
@EnableMethodSecurity // to enable method level security
@AllArgsConstructor
public class SecurityConfiguration {
	// depcy
	private final PasswordEncoder encoder;
	private final JWTCustomFilter jwtCustomFilter;

	/*
	 * Configure spring bean (@Bean) to configure spring securtiy filter chain
	 * 
	 */
	@Bean
	SecurityFilterChain configureSecFilterChain(HttpSecurity http) throws Exception {
		// disable CSRF protection : since un necessary with stateless REST APIs
		http.csrf(csrf -> csrf.disable());
		// form login is enabled by default , to disable it
		http.formLogin(form -> form.disable());
				// enable Basic HTTP auth
			//	.httpBasic(Customizer.withDefaults());
		// add URL based authorization rules
		// un protected end points - swagger , view products
		http.authorizeHttpRequests(request -> request
				.requestMatchers("/v*/api-docs/**", "/swagger-ui/**", "/online-exam/all-questions", "/users/signup",
						"/users/signin")
				.permitAll()
				// only admin should be allowed to add product
				.requestMatchers("/online-exam/admin/**").hasRole("ADMIN")
				// only customer can purchase the product
				.requestMatchers("/products/purchase/**").hasRole("STUDENT")
				// any other request - can accessed only by authenticated users
				.anyRequest().authenticated())
				// tell Spring sec - not to create any HttpSession object
				// to store spring security info
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		//add custom jwt filter before 1st auth filter 
		http.addFilterBefore(jwtCustomFilter, 
				UsernamePasswordAuthenticationFilter.class);
		// HttpSecurity class builds spring sec filter chain , as per above
		// customizations
		return http.build();
	}

	// configure spring bean - auth mgr
	@Bean
	AuthenticationManager authenticationManager
	(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}

}
