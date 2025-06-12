package com.cdac.controller;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.AuthResponse;
import com.cdac.dto.UserSignInRequest;
import com.cdac.dto.UserSignupRequest;
import com.cdac.security.JwtUtils;
import com.cdac.service.UserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
	private final AuthenticationManager authenticationManager;
	private final UserService userService;
	private final JwtUtils jwtUtils;
	
	/*
	 * Desc - User Registration
	 * URL - http://host:port/users/signup
	 * Method - POST
	 * Payload - user
	 * Registration req dto response Success SC201
	 */
	@PostMapping("/signup")
	public ResponseEntity<?>userSignUp(@RequestBody @Valid UserSignupRequest dto){
		System.out.println("in user sign up " + dto);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(userService.registerNewUser(dto));
	}
	
	/*
	 * Desc - User Login
	 * URL - http://host:port/users/signin
	 * Method - POST
	 * Payload - user
	 * Registration req dto response Success SC201
	 */
	@PostMapping("signin")
	public ResponseEntity<?>userSignIn(@RequestBody @Valid UserSignInRequest dto){
		System.out.println("in user sign in " + dto);
		
		// create auth token 
		UsernamePasswordAuthenticationToken authToken = new 
				UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword());
		
		// invoke isAuthenticate method
		Authentication successAuth = authenticationManager.authenticate(authToken);
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(new AuthResponse("Successful Authentication...", 
						jwtUtils.generateJwtToken(successAuth)));
	}
	
}
