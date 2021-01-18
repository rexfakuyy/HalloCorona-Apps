import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.recky.instructype.com/api/v1",
});

export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
