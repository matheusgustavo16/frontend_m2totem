import axios from "axios";

// https://apitotem.westsideco.com.br/api
const apiUrl = process.env.API_URL || "http://localhost:1337/api";

export const httpClient = axios.create({
  baseURL: apiUrl,
  method: "POST",
  timeout: 1200000,
  timeoutErrorMessage: `A requisição expirou`,
  headers: {
    "Content-Type": "application/json"
  }
});

httpClient.interceptors.response.use(
  (response: any) => Promise.resolve(response.data),
  (error: { response: any }) => {
    return Promise.reject(error.response.data);
  }
);
