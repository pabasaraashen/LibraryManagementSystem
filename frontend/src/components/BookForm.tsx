

function BookForm() {
  return (
    <div className="modal">
        <div className="modal-card">
            <div className="modal-header">
                <h2>Add New Book</h2>
                <button type="button" className="close-btn">cancel</button>
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
                        <button type="button" className="secondary-btn" >Cancel</button>
                        <button type="submit" className="primary-btn">Submit</button>
                    </div>
                </form>

        </div>
    </div>
  )
}

export default BookForm