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

## 📋 Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (v18 or higher)
- [SQL Server](https://www.microsoft.com/sql-server) or SQL Server Express

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


