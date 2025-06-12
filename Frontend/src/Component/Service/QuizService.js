import axios from "axios";
import { getToken } from "./AdminService";

const token = getToken();

export function getSubjects() {
  return axios.get("http://localhost:8080/online-exam/subjects");
}

export function addQuestion(newQuestion) {
  return axios.post(
    "http://localhost:8080/online-exam/admin/create-new-question",
    newQuestion,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export function getAllQuestions() {
  return axios.get("http://localhost:8080/online-exam/all-questions");
}

export function getAllDistinctSubjects() {
  return axios.get("http://localhost:8080/online-exam/subjects");
}

export function deleteQuestion(id) {
  return axios.delete(
    `http://localhost:8080/online-exam/admin/question/${id}/delete`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export function updateQuestion(id, updateQuestion) {
  return axios.put(
    `http://localhost:8080/online-exam/admin/question/${id}/update`,
    updateQuestion,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export const getQuestionsBySubject = (subject) =>
  axios.get(`http://localhost:8080/online-exam/questions/subject/${subject}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
