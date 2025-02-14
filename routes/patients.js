// routes/patients.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Add a new patient
router.post('/', async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name)
      return res.status(400).json({ message: 'Patient name is required.' });

    const newPatient = await Patient.create({ name, age });
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get patient details by ID
router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient)
      return res.status(404).json({ message: 'Patient not found.' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// In the code snippet above, we have defined two routes for handling patient-related operations. The first route is used to add a new patient to the database, while the second route is used to fetch patient details by ID.