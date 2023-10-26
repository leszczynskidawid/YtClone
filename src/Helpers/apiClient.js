import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;
export const apiClient = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 5000,
  // headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" },
});
