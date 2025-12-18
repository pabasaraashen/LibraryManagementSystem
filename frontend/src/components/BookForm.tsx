import React, { useState, useEffect } from 'react';
import type { Book } from '../types';

interface Props {
    currentBook: Book | null;
    onSave: (book: Book) => Promise<void>;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(book);
    };

    return (
        <div className="modal">
            <div className="modal-card">
                <div className="modal-header">
                    <h2 className="modal-title">{currentBook ? 'Edit Book' : 'Add New Book'}</h2>
                    <button type="button" className="close-btn" onClick={onCancel}>×</button>
                </div>
                <form onSubmit={handleSubmit} className="form-grid">
                    <div>
                        <label className="label">Title *</label>
                        <input
                            className="input"
                            name="title"
                            placeholder="Enter book title"
                            value={book.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Author *</label>
                        <input
                            className="input"
                            name="author"
                            placeholder="Enter author name"
                            value={book.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Description *</label>
                        <textarea
                            className="textarea"
                            name="description"
                            placeholder="Enter book description"
                            value={book.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="secondary-btn" onClick={onCancel}>Cancel</button>
                        <button type="submit" className="primary-btn">{currentBook ? 'Update' : 'Create'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookForm;