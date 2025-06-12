import React, { useState } from "react";

const QuestionCardAdmin = ({ data, isAdmin, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(data.question);
  const [editedChoices, setEditedChoices] = useState([...data.choices]);
  const [editedCorrectAnswer, setEditedCorrectAnswer] = useState([
    ...data.correctAnswer,
  ]);

  const handleUpdate = () => {
    const updatedData = {
      ...data,
      question: editedQuestion,
      choices: editedChoices,
      correctAnswer: editedCorrectAnswer,
    };
    onUpdate(data.id, updatedData);
    setEditMode(false);
  };

  return (
    <div
    className="question-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "15px",
        flex:"0 0 48%",

      }}
    >
      {editMode ? (
        <>
          <input
            type="text"
            value={editedQuestion}
            onChange={(e) => setEditedQuestion(e.target.value)}
          />
          {editedChoices.map((choice, idx) => (
            <input
              key={idx}
              type="text"
              value={choice}
              onChange={(e) => {
                const updated = [...editedChoices];
                updated[idx] = e.target.value;
                setEditedChoices(updated);
              }}
              style={{ display: "block", marginTop: "5px" }}
            />
          ))}
          <input
            type="text"
            value={editedCorrectAnswer[0]}
            onChange={(e) => setEditedCorrectAnswer([e.target.value])}
            placeholder="Correct Answer"
            style={{ marginTop: "5px" }}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{data.question}</h3>
          <ul>
            {data.choices.map((choice, index) => (
              <li key={index}>{choice}</li>
            ))}
          </ul>
          <p>
            <strong>Correct:</strong> {data.correctAnswer.join(", ")}
          </p>
          {isAdmin && (
            <>
              <button onClick={() => setEditMode(true)}>Edit</button>
              <button onClick={() => onDelete(data.id)}>Delete</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionCardAdmin;
