import React, { useEffect, useState } from "react";
import { getAllQuestions } from "../Service/QuizService";
import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const fetchAllQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const handleSelect = (questionId, selectedChoice) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedChoice,
    }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (
        answers[q.id] &&
        q.correctAnswer.includes(answers[q.id])
      ) {
        correct++;
      }
    });
    setScore(correct);
    setIsSubmitted(true);
  };

  console.log(questions);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz</h2>

      {questions.map((question, idx) => (
        <QuestionCard
          key={question.id}
          data={question}
          selected={answers[question.id]}
          onSelect={handleSelect}
          isSubmitted={isSubmitted}
        />
      ))}

      {!isSubmitted ? (
        <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
          Submit
        </button>
      ) : (
        <h3 style={{ marginTop: "20px" }}>
          Score: {score} / {questions.length}
        </h3>
      )}
    </div>
  );
};

export default QuestionList;
