import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torii-gate-johnpaul.onrender.com/api",
});
