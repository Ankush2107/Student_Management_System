# Student Managament System

This application allows you to manage student promotions, promoting students to a new class and session while automatically generating new class fees.

## Table of Contents

- [Client Side](#client-side)
- [Server Side](#server-side)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Client Side

### Technologies Used
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Sass](https://sass-lang.com/) - CSS preprocessor

### Project Structure

- `src/App.jsx`: Main application component rendering `StudentTable` and `PromotionForm`.
- `src/components/PromotionForm.jsx`: Form component for promoting students.
- `src/components/StudentsTable.jsx`: Table component displaying current student data.
- `src/components/*.css`: Styling files for components.

### Setup
1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`

## Server Side

### Technologies Used
- [Express](https://expressjs.com/) - Node.js web application framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

### Project Structure

- `server.js`: Express server setup.
- `routes/student.routes.js`: Express routes handling student-related operations.
- `models/current.model.js`: Mongoose model for student data.
- `calculateFees.js`: Module for calculating new class fees.
- `config/db.js`: Database connection setup.

### Setup
1. Install dependencies: `npm install`
2. Run the server: `npm run dev`

## Installation

1. Clone the repository: `git clone https://github.com/your-username/student-promotion-app.git`
2. Navigate to the project folder: `cd student-promotion-app`
3. Install client dependencies: `cd client && npm install`
4. Install server dependencies: `cd ../server && npm install`
5. Create a `.env` file in the `server` directory and set the necessary environment variables (database connection, etc.).

## Usage

1. Start the client: `cd client && npm run dev`
2. Start the server: `cd ../server && npm run dev`
3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
