import React, { useEffect, useState } from "react";
import {
  getAllQuestions,
  deleteQuestion,
  updateQuestion,
} from "../Service/QuizService";
import QuestionCardAdmin from "./QuestionCardAdmin";

const QuestionListAdmin = () => {
  const [questions, setQuestions] = useState([]);

  const fetchAllQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions((prev) => prev.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateQuestion(id, updatedData);
      setQuestions((prev) =>
        prev.map((q) => (q.id === id ? { ...q, ...updatedData } : q))
      );
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  // console.log(questions);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-center">Update Quiz</h2>
      {questions.map((question) => (
        <QuestionCardAdmin
          className="question-card"
          key={question.id}
          data={question}
          isAdmin={true}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default QuestionListAdmin;
