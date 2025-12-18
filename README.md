# Library Management System

A full-stack web application for managing a library's book inventory with a modern, responsive UI.

## 🚀 Tech Stack

### Backend
- **.NET 8.0** - ASP.NET Core Web API
- **Entity Framework Core** - ORM for database operations
- **SQLite** - Database 

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with modern design patterns

## ✨ Features

- **CRUD Operations** - Create, read, update, and delete books
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Modern UI** - Clean interface with smooth interactions
- **Form Validation** - Client-side validation for book entries
- **Modal Forms** - Intuitive popup forms for adding/editing books
- **Real-time Updates** - Instant UI updates after operations

## 🛠️ Installation

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Update the connection string in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Data Source=library.db"
   }
   ```

4. Apply database migrations:
   ```bash
   dotnet ef database update
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Start the Backend

```bash
cd Backend
dotnet run
```
The API will run on `https://localhost:5156`

### Start the Frontend

```bash
cd frontend
npm run dev
```
The frontend will run on `"http://localhost:5173",
                          "http://localhost:5174", 
                          "http://localhost:5175",
                          "http://localhost:5176"`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/{id}` | Get a specific book |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/{id}` | Update a book |
| DELETE | `/api/books/{id}` | Delete a book |

### Request/Response Example

**POST /api/books**
```json
{
  "title": "",
  "author": "",
  "description": ""
}
```

## 📁 Project Structure

```
LibraryManagementSystem/
├── Backend/
│   ├── Controllers/
│   │   └── BookController.cs       # API endpoints
│   ├── Data/
│   │   └── LibraryContext.cs       # EF Core DbContext
│   ├── Models/
│   │   └── Book.cs                 # Book entity
│   ├── Program.cs                  # App entry point
│   └── appsettings.json            # Configuration
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── BookForm.tsx        # Add/Edit form
    │   │   └── BookList.tsx        # Books display
    │   ├── api.ts                  # API service layer
    │   ├── types.ts                # TypeScript types
    │   ├── App.tsx                 # Main component
    │   └── main.tsx                # App entry point
    └── package.json
```

## User Interfaces of project
<img width="1920" height="1080" alt="Screenshot (173)" src="https://github.com/user-attachments/assets/368334cf-aeb9-4cc8-b0a8-c4dd6d0d06c7" />
<img width="1920" height="1080" alt="Screenshot (174)" src="https://github.com/user-attachments/assets/f44c4085-e702-421c-ab6e-17cf03c3ea3a" />
<img width="1920" height="1080" alt="Screenshot (175)" src="https://github.com/user-attachments/assets/dd02989d-e9a3-4804-a62e-17a654fd9cac" />
<img width="1920" height="1080" alt="Screenshot (176)" src="https://github.com/user-attachments/assets/bc95045b-c209-4eee-9bc7-e6bbb2a753cb" />
<img width="1920" height="1080" alt="Screenshot (177)" src="https://github.com/user-attachments/assets/bd44d4fa-6239-4e98-926c-45fb16f39170" />
<img width="1920" height="1080" alt="Screenshot (178)" src="https://github.com/user-attachments/assets/f3d3a0c8-6db9-4563-b713-3a0070ed52b8" />


