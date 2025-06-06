package com.cdac.service;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.cdac.custom_exceptions.ApiException;
import com.cdac.dao.UserDao;
import com.cdac.dto.UserResp;
import com.cdac.dto.UserSignupRequest;
import com.cdac.entities.User;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService{
	
	private final UserDao userDao;
	private final ModelMapper modelMapper;
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public UserResp registerNewUser(UserSignupRequest dto) {
		// check user exists or not
		if(userDao.existsByEmail(dto.getEmail())) {
			throw new ApiException("Duplicate Email Found");
		}
		
		// do the mapping 
		// incomming dto to entityy
		User userEntity = modelMapper.map(dto, User.class);
		// encrypt password
		userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
		// send to thee user
		return modelMapper.map(userDao.save(userEntity), UserResp.class);
	}

}
