import axios from "axios";
import { getToken } from "./AdminService";

const token = getToken();

export function getRegisteredStudents() {
  return axios.get("http://localhost:8080/admin/all-students", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
