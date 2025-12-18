# Library Management System

A full-stack web application for managing a library's book inventory with a modern, responsive UI.

## 🚀 Tech Stack

### Backend
- **.NET 8.0** - ASP.NET Core Web API
- **Entity Framework Core** - ORM for database operations
- **SQL Server** - Database (configured via connection string)

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
     "DefaultConnection": "Server=YOUR_SERVER;Database=LibraryDB;Trusted_Connection=True;TrustServerCertificate=True;"
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
The API will run on `https://localhost:7095` (or the port specified in `launchSettings.json`)

### Start the Frontend

```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

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
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A classic American novel set in the Jazz Age"
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

## 🔧 Development

### Backend Development
- **Hot Reload**: The .NET app supports hot reload during development
- **Swagger**: API documentation available at `/swagger` when running in development mode

### Frontend Development
- **Hot Module Replacement**: Vite provides instant HMR
- **TypeScript**: Full type checking enabled
- **ESLint**: Code quality and consistency checking

## 🚢 Building for Production

### Backend
```bash
cd Backend
dotnet publish -c Release -o ./publish
```

### Frontend
```bash
cd frontend
npm run build
```
The production build will be in the `dist/` folder.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Your Name - [@yourgithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by real-world library management needs

