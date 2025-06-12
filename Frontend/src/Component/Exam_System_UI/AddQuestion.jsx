import React, { useEffect, useState } from "react";
import { getAllDistinctSubjects, addQuestion } from "../Service/QuizService";
import "./Styles/AddQuestion.css";

const AddQuestion = () => {
  const [distinctSubjects, setDistinctSubjects] = useState([]);
  const [subject, setSubject] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await getAllDistinctSubjects();
      setDistinctSubjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalSubject = subject === "add_new" ? newSubject : subject;

    const questionData = {
      question: questionText,
      subject: finalSubject,
      choices,
      correctAnswer: [correctAnswer],
    };

    try {
      await addQuestion(questionData);
      alert("Question added successfully!");
      setQuestionText("");
      setChoices(["", "", "", ""]);
      setCorrectAnswer("");
      setSubject("");
      setNewSubject("");
    } catch (error) {
      console.error("Failed to save question:", error);
    }
  };

  return (
    <div className="add-question-container">
      <form className="add-question-form" onSubmit={handleSubmit}>
        <div>
          <label>Question</label>
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
            placeholder="Enter your question"
          />
        </div>

        <div>
          <label>Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">-- Select Subject --</option>
            {distinctSubjects.map((sub_name, index) => (
              <option key={index} value={sub_name}>
                {sub_name}
              </option>
            ))}
            <option value="add_new">+ Add New Subject</option>
          </select>
        </div>

        {subject === "add_new" && (
          <div>
            <label>New Subject</label>
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              required
              placeholder="Enter new subject name"
            />
          </div>
        )}

        <div>
          <label>Choices</label>
          {choices.map((choice, index) => (
            <input
              key={index}
              type="text"
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
              placeholder={`Choice ${index + 1}`}
              required
            />
          ))}
        </div>

        <div>
          <label>Correct Answer</label>
          <select
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="">-- Select Correct Answer --</option>
            {choices.map(
              (choice, index) =>
                choice && (
                  <option key={index} value={choice}>
                    {choice}
                  </option>
                )
            )}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
