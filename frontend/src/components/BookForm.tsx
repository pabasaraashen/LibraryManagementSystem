import React, { useState, useEffect } from 'react';
import type { Book } from '../types';

interface Props {
    currentBook: Book | null;
    onSave: (book: Book) => void;
    onCancel: () => void;
}


const BookForm: React.FC<Props> = ({ currentBook, onSave, onCancel }) => {
    const [book, setBook] = useState<Book>({ title: '', author: '', description: '' });

    useEffect(() => {
        if (currentBook) {
            setBook(currentBook);
        } else {
            setBook({ title: '', author: '', description: '' });
        }
    }, [currentBook]);


  return (
    <div className="modal">
        <div className="modal-card">
            <div className="modal-header">
                <h2 className="modal-title">{currentBook ? "Edit Book" : "Add New Book"}</h2>
                <button type="button" className="close-btn" onClick={onCancel}></button>
            </div>
            
            <form  className="form-grid">
                    <div>
                        <label className="label">Title *</label>
                        <input
                            className="input"
                            name="title"
                            placeholder="Enter book title"
                            
                        />
                    </div>
                    <div>
                        <label className="label">Author *</label>
                        <input
                            className="input"
                            name="author"
                            placeholder="Enter author name"
                            
                        />
                    </div>
                    <div>
                        <label className="label">Description *</label>
                        <textarea
                            className="textarea"
                            name="description"
                            placeholder="Enter book description"
                            
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="secondary-btn" onClick={onCancel} >Cancel</button>
                        <button type="submit" className="primary-btn">{currentBook ? "Update" : "Add"}</button>
                    </div>
                </form>

        </div>
    </div>
  )
}

export default BookForm