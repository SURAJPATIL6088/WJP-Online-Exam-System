package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cdac.custom_exceptions.NotFoundException;
import com.cdac.dao.OnlineExamDao;
import com.cdac.entities.OnlineExam;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class OnlineExamServiceImpl implements OnlineExamService{

	private final OnlineExamDao onlineExamDao;
	
	@Override
	public OnlineExam createOnlineExam(OnlineExam onlineExam) {
		return onlineExamDao.save(onlineExam);
	}

	@Override
	public List<OnlineExam> getAllQuestions() {
		return onlineExamDao.findAll();
	}

	@Override
	public void deleteOnlineExam(Long id) {
		onlineExamDao.deleteById(id);
	}

	@Override
	public OnlineExam updateOnlineExam(Long id, OnlineExam onlineExam) {
		return onlineExamDao.findById(id).map(existingExam->{
			existingExam.setQuestion(onlineExam.getQuestion());
			existingExam.setChoices(onlineExam.getChoices());
			existingExam.setCorrectAnswer(onlineExam.getCorrectAnswer());
			existingExam.setSubject(onlineExam.getSubject());
			return onlineExamDao.save(existingExam);
		}).orElseThrow(
				()->new NotFoundException("Exam Not Found with Given Id"));
	}

	@Override
	public Optional<OnlineExam> getOnlineExamById(Long id) {
		return onlineExamDao.findById(id);
	}

	@Override
	public List<String> getAllSubjects() {
		return onlineExamDao.findDistinctSubject();
	}

}
