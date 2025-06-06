package com.cdac.custom_exceptions;

public class NotFoundException extends RuntimeException {

	public NotFoundException(String msg) {
		super(msg);
	}

}
