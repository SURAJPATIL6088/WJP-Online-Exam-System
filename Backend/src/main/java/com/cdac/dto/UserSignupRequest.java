package com.cdac.dto;

import com.cdac.entities.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserSignupRequest{
	
	@NotBlank(message = "first name is required")
	private String firstName;
	
	@NotBlank
	private String lastName;
	
	@Email(message = "Invalid email format")
	private String email;
	
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$*]).{5,20})", message = "invalid password format!!!!") 
	private String password;
	
	private UserRole role;
}
