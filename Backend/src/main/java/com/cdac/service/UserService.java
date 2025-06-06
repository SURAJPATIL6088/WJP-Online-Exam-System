package com.cdac.service;

import com.cdac.dto.UserResp;
import com.cdac.dto.UserSignupRequest;

public interface UserService {
	 UserResp registerNewUser(UserSignupRequest dto);
}
