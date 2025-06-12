package com.cdac.service;

import java.util.List;
import java.util.Optional;

import com.cdac.entities.OnlineExam;

public interface OnlineExamService {
	// create question
	OnlineExam createOnlineExam(OnlineExam onlineExam);
	
	// get all questions
	List<OnlineExam>getAllQuestions();
	
	// delete question
	void deleteOnlineExam(Long id);
	
	// update question
	OnlineExam updateOnlineExam(Long id, OnlineExam onlineExam);
	
	Optional<OnlineExam> getOnlineExamById(Long id);
	
	List<String> getAllSubjects();
	
	List<OnlineExam> getQuestionsBySubject(String subject);

}
