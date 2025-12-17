import React from 'react';
import type { Book } from '../types';

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

const BookList: React.FC<Props> = ({ books, onEdit, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book-row">
            <div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author"><strong>Author:</strong> {book.author}</p>
              <p className="book-desc">{book.description}</p>
            </div>
            <div className="actions">
              <button className="icon-btn" onClick={() => onEdit(book)}>
                Edit
              </button>
              <button className="icon-btn danger" onClick={() => book.id && onDelete(book.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
