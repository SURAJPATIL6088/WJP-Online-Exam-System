package com.cdac.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entities.OnlineExam;

public interface OnlineExamDao extends JpaRepository<OnlineExam, Long>{
	
	// list only unique subjects
	@Query("select distinct o.subject from OnlineExam o")
	List<String>findDistinctSubject();
	
	// get the exam by subject
	Page<OnlineExam>findBySubject(String subject, Pageable pageable);
	
	List<OnlineExam> findBySubject(String subject);
}
