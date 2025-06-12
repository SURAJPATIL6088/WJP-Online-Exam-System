import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuestionsBySubject } from "../Service/QuizService";
import QuestionCard from "./QuestionCard";

const QuizPage = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestionsBySubject(subject); // ✅
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [subject]);

  const handleSelect = (questionId, choice) => {
    setAnswers({ ...answers, [questionId]: choice });
  };

  const handleSubmit = () => {
    let count = 0;
    questions.forEach((q) => {
      if (answers[q.id] && q.correctAnswer.includes(answers[q.id])) {
        count++;
      }
    });
    setScore(count);
    setIsSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h2>Exam: {subject}</h2>

      {questions.length > 0 ? (
        <>
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              data={q}
              selected={answers[q.id]}
              onSelect={handleSelect}
              isSubmitted={isSubmitted}
            />
          ))}

          {!isSubmitted ? (
            <button onClick={handleSubmit}>Submit Quiz</button>
          ) : (
            <div>
              <h3>
                Score: {score} / {questions.length}
              </h3>
              <button onClick={() => navigate("/attempt-exam")}>
                Back to All Exams
              </button>
            </div>
          )}
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
