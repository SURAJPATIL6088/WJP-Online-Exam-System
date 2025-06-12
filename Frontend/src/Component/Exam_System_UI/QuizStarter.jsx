import React, { useEffect, useState } from "react";
import { getSubjects } from "../Service/QuizService";
import { useNavigate } from "react-router-dom";
import "./Styles/QuizStarter.css";

const QuizStarter = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllSubjects = async () => {
      try {
        const response = await getSubjects();
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllSubjects();
  }, []);

  return (
    <div className="quiz-container">
      <h2 className="exams-heading">Available Exams</h2>
      <div className="subject-cards">
        {subjects.map((subject, idx) => (
          <div key={idx} className="subject-card">
            <h3>{subject}</h3>
            <p>Click below to start the {subject} exam</p>
            <button onClick={() => navigate(`/attempt-exam/${subject}`)}>
              Attempt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizStarter;
