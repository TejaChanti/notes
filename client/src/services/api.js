import axios from 'axios';

const API_URL = 'https://notes-backend-1u8o.onrender.com/api/notes';

export const getNotes = async () => {
  return await axios.get(API_URL);
};

export const createNote = async (note) => {
  return await axios.post(API_URL, note);
};

export const deleteNote = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const updateNote = async (note) => {
  return await axios.put(`${API_URL}/${note._id}`, note);
};
