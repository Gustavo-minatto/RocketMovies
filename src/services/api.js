import axios from "axios";

export const api = axios.create({
  baseURL: "https://node-back-end-lj80.onrender.com"
});