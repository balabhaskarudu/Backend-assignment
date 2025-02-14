# Backend-assignment
A Node.js backend REST API built with Express, Sequelize, and SQLite for managing users, patients, and heart rate data, developed as part of the  Internship Assignment.
#  Backend with SQLite

## Setup Instructions

1. **Clone the repository and navigate to the folder:**

2. **Install dependencies:**
`npm init -y
    npm install express sequelize sqlite3 body-parser bcryptjs
    npm install --save-dev nodemon
   `


4. **Run the project:**
- To run normally:
  ```
  node server.js
  ```
- Or with nodemon (auto-reload):
  ```
  npx nodemon server.js
  ```

## API Endpoints

- **User Authentication:**
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user.

- **Patients:**
- `POST /api/patients` - Add a new patient.
- `GET /api/patients/:id` - Get patient details.

- **Heart Rate:**
- `POST /api/heartrate` - Record heart rate data.
- `GET /api/heartrate/:patientId` - Retrieve heart rate records for a patient.

## Database

- The project uses SQLite. The database file (`database.sqlite`) will be created automatically in the project root when you run the server.

## Testing

Use Postman or any API testing tool to verify the endpoints.

Enjoy building your innovative backend!
