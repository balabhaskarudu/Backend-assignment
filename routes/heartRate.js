// routes/heartRate.js
const express = require('express');
const router = express.Router();
const HeartRate = require('../models/HeartRate');

// Record heart rate data for a patient
router.post('/', async (req, res) => {
  try {
    const { patientId, rate } = req.body;
    if (!patientId || rate == null)
      return res.status(400).json({ message: 'Patient ID and heart rate are required.' });

    const newRecord = await HeartRate.create({ patientId, rate });
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Retrieve heart rate records for a patient
router.get('/:patientId', async (req, res) => {
  try {
    const records = await HeartRate.findAll({
      where: { patientId: req.params.patientId },
      order: [['recordedAt', 'DESC']]
    });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
