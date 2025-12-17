import BookForm from './components/BookForm';
import './App.css'
import { useEffect, useState } from 'react';
import type { Book } from './types';
import { getBooks } from './api';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.error("Error loading books", error);
        }
    };
  return (
          <div>
            <div className="app-header">
                <div className="title">
                    <h3>Library Management System</h3>
                </div>
                
                    <button className="primary-btn" >
                        + Add Book
                    </button>
                
            </div>

            <BookForm/>
          </div>  
  )
}

export default App