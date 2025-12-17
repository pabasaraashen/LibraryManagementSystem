import BookForm from './components/BookForm';
import './App.css'

function App() {
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