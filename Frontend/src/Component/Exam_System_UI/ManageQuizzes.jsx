import React, { useState } from "react";
import AddQuestion from "./AddQuestion";
import QuestionListAdmin from "./QuestionListAdmin";
import "./Styles/ManageQuizzes.css";

const ManageQuizzes = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleAddQuestion = () => {
    setOpenModal(true);
  };

  return (
    <div id="managequiz">
      <button className="add-question-button" onClick={handleAddQuestion}>
        Add Question
      </button>

      {openModal && (
        <>
          <div>
            <AddQuestion />
          </div>
          <button className="close-button" onClick={() => setOpenModal(false)}>
            Close
          </button>
        </>
      )}

      <div className="questions">
        <QuestionListAdmin />
      </div>
    </div>
  );
};

export default ManageQuizzes;
