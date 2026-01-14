import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const authService = {
  register: (name, email, password, confirmPassword) =>
    axios.post(`${API_URL}/auth/register`, { name, email, password, confirmPassword }),
  
  login: (email, password) =>
    axios.post(`${API_URL}/auth/login`, { email, password }),
  
  getProfile: (token) =>
    axios.get(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const taskService = {
  getTasks: (token, params = {}) =>
    axios.get(`${API_URL}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    }),
  
  createTask: (token, taskData) =>
    axios.post(`${API_URL}/tasks`, taskData, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
  getTaskById: (token, id) =>
    axios.get(`${API_URL}/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
  updateTask: (token, id, taskData) =>
    axios.put(`${API_URL}/tasks/${id}`, taskData, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
  deleteTask: (token, id) =>
    axios.delete(`${API_URL}/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
  getTaskStats: (token) =>
    axios.get(`${API_URL}/tasks/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};
