import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

// Add a new service
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !price) {
    return res.status(400).send('Service name and price are required.');
  }

  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).send('Error adding service');
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).send('Error retrieving services');
  }
});

// Update a service
router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).send('Service not found');
    }
    res.status(200).json(updatedService);
  } catch (err) {
    res.status(500).send('Error updating service');
  }
});

// Delete a service
router.delete('/:id', async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).send('Service not found');
    }
    res.status(200).send('Service deleted');
  } catch (err) {
    res.status(500).send('Error deleting service');
  }
});

export default router;
