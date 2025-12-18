import { useEffect, useState } from 'react';
import type { Book } from './types';
import { getBooks, createBook, updateBook, deleteBook } from './api';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

function App() {
    const [books, setBooks] = useState<Book[]>([]);
    const [editingBook, setEditingBook] = useState<Book | null>(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSave = async (book: Book) => {
        try {
            if (book.id) {
                await updateBook(book.id, book);
            } else {
                await createBook(book);
            }
            setIsFormVisible(false);
            setEditingBook(null);
            loadBooks();
        } catch (error) {
            console.error("Error saving book", error);
        }
    };

    const handleEdit = (book: Book) => {
        setEditingBook(book);
        setIsFormVisible(true);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this book?")) {
            await deleteBook(id);
            loadBooks();
        }
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div>
            <div className="app-header">
                <div className="title">
                    <h2>Library Management System</h2>
                </div>
                {!isFormVisible && (
                    <button className="primary-btn" onClick={() => { setEditingBook(null); setIsFormVisible(true); }}>
                        + Add Book
                    </button>
                )}
            </div>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search books by title or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {isFormVisible && (
                <BookForm
                    currentBook={editingBook}
                    onSave={handleSave}
                    onCancel={() => { setIsFormVisible(false); setEditingBook(null); }}
                />
            )}

            <BookList books={filteredBooks} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default App;