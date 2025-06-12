package com.cdac.controller;

import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import com.cdac.custom_exceptions.NotFoundException;
import com.cdac.dao.OnlineExamDao;
import com.cdac.entities.OnlineExam;
import com.cdac.service.OnlineExamService;
import jakarta.validation.Valid;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.CREATED;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/online-exam")
@AllArgsConstructor
public class OnlineExamController {

    private final OnlineExamService questionService;


    @PostMapping("/admin/create-new-question")
    public ResponseEntity<OnlineExam> createQuestion(@Valid @RequestBody OnlineExam question){
    	OnlineExam createdQuestion = questionService.createOnlineExam(question);
        return ResponseEntity.status(CREATED).body(createdQuestion);
    }

    @GetMapping("/all-questions")
    public ResponseEntity<List<OnlineExam>> getAllQuestions(){
        List<OnlineExam> questions = questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/question/{id}")
    public ResponseEntity<OnlineExam> getQuestionById(@PathVariable Long id) {
        Optional<OnlineExam> theQuestion = questionService.getOnlineExamById(id);
        if (theQuestion.isPresent()){
            return ResponseEntity.ok(theQuestion.get());
        }else {
            throw new NotFoundException("Not Found");
        }
    }

    @PutMapping("/admin/question/{id}/update")
    public ResponseEntity<OnlineExam> updateQuestion(
            @PathVariable Long id, @RequestBody OnlineExam question) {
    	OnlineExam updatedQuestion = questionService.updateOnlineExam(id, question);
        return ResponseEntity.ok(updatedQuestion);
    }

    @DeleteMapping("/admin/question/{id}/delete")
    public ResponseEntity<Void> deleteQuestion(@PathVariable Long id){
        questionService.deleteOnlineExam(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/subjects")
    public ResponseEntity<List<String>> getAllSubjects(){
        List<String> subjects = questionService.getAllSubjects();
        return ResponseEntity.ok(subjects);
    }
    
    
    @GetMapping("/questions/subject/{subject}")
    public ResponseEntity<List<OnlineExam>> getQuestionsBySubject(@PathVariable String subject) {
    	List<OnlineExam> questions = questionService.getQuestionsBySubject(subject);
    	return ResponseEntity.ok(questions);
    }

}