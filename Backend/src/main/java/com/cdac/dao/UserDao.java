package com.cdac.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entities.User;

public interface UserDao extends JpaRepository<User, Long>{
	//to fetch user details by email
	Optional<User> findByEmail(String email);
	
	// check for duplicate email
	boolean existsByEmail(String email);
	
	// find user by email and password for login
	Optional<User>findByEmailAndPassword(String email, String password);
}
