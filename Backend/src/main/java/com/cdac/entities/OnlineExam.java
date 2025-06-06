package com.cdac.entities;

import java.util.List;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class OnlineExam {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	private String question;
	
	private String subject;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String>choices;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String>correctAnswer;
}
