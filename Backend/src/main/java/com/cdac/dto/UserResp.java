package com.cdac.dto;

import com.cdac.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResp{
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	private String firstName;
	
	private String lastName;

	private String email;
	
	private UserRole role;
}
