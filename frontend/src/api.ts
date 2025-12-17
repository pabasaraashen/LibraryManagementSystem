import axios from 'axios';
import type { Book } from './types';

const API_URL = 'http://localhost:5173/api/Books'; 

export const getBooks = async () => (await axios.get<Book[]>(API_URL)).data;
export const createBook = async (book: Book) => (await axios.post<Book>(API_URL, book)).data;
export const updateBook = async (id: number, book: Book) => (await axios.put(`${API_URL}/${id}`, book)).data;
export const deleteBook = async (id: number) => (await axios.delete(`${API_URL}/${id}`)).data;