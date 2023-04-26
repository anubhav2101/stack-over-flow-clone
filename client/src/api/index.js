import axios from "axios";

const api = axios.create({ baseURL: "https://stack-overflow-c-wlxt.onrender.com" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

//login page
export const logIn = (authData) => api.post("/user/login", authData);
export const signUp = (authData) => api.post("/user/signup", authData);

export const sendEmail = (emailData) => api.post('/sendEmail' , emailData)
export const loginOTP = (otpData) => api.post('login-otp', otpData)

//questions
export const postQuestion = (questionData) =>
  api.post("/questions/Ask", questionData);
export const getAllQuestions = () => api.get("/questions/get");
export const deleteQuestion = (id) => api.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  api.patch(`/questions/vote/${id}`, { value, userId });

//answer
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  api.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerData) =>
  api.patch(`/answer/delete/${id}`, answerData);

//user
export const fetchAllUsers = () => api.get("user/getAllUsers/");
export const updateProfile =(id , updateData) => api.patch(`/user/update/${id}`, updateData)
