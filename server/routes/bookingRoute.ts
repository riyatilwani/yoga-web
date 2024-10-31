const express = require('express');
const router = express.Router();

import type { Request, Response } from 'express';

// GET all bookings
router.get('/', (req: Request, res: Response) => {
  res.json({
    bookings: [
      {
        id: 1,
        userId: 'user123',
        className: 'Yoga Basic',
        date: '2024-03-20',
        time: '10:00 AM'
      },
      {
        id: 2,
        userId: 'user456',
        className: 'Pilates',
        date: '2024-03-21',
        time: '2:00 PM'
      }
    ]
  });
});

// GET single booking
router.get('/:id', (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    userId: 'user123',
    className: 'Yoga Basic',
    date: '2024-03-20',
    time: '10:00 AM',
    status: 'confirmed'
  });
});

// POST create booking
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Booking created successfully',
    booking: {
      id: 3,
      userId: req.body?.userId || 'user789',
      className: req.body?.className || 'Meditation',
      date: req.body?.date || '2024-03-22',
      time: req.body?.time || '3:00 PM'
    }
  });
});

// PUT update booking
router.put('/:id', (req: Request, res: Response) => {
  res.json({
    message: 'Booking updated successfully',
    booking: {
      id: req.params.id,
      userId: req.body?.userId || 'user123',
      className: req.body?.className || 'Updated Class',
      date: req.body?.date || '2024-03-23',
      time: req.body?.time || '4:00 PM'
    }
  });
});

// DELETE booking
router.delete('/:id', (req: Request, res: Response) => {
  res.json({
    message: 'Booking deleted successfully',
    id: req.params.id
  });
});

module.exports = router;