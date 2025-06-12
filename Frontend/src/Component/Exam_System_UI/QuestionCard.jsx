import React from "react";

const QuestionCard = ({ data, selected, onSelect, isSubmitted }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{data.question}</h3>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {data.choices.map((choice, index) => {
          const isCorrect = data.correctAnswer.includes(choice);
          const isSelected = selected === choice;

          let style = {};
          if (isSubmitted) {
            if (isCorrect && isSelected) style = { color: "green" };
            else if (!isCorrect && isSelected) style = { color: "red" };
            else if (isCorrect) style = { color: "green" };
          }

          return (
            <li key={index}>
              <label style={style}>
                <input
                  type="radio"
                  name={`question-${data.id}`}
                  value={choice}
                  checked={isSelected}
                  onChange={() => onSelect(data.id, choice)}
                  disabled={isSubmitted}
                />
                {choice}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
