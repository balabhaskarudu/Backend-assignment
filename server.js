// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');
const heartRateRoutes = require('./routes/heartRate');

const app = express();
app.use(bodyParser.json());

// Register API routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/heartrate', heartRateRoutes);

// Sync models and start server
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database sync error:', err));
// In the server.js file, we have defined the main server configuration. We have imported the necessary routes for handling authentication, patient, and heart rate operations. The app is configured to use the body-parser middleware to parse incoming requests as JSON.