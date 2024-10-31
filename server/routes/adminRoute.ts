const express = require('express');
const router = express.Router();

import type { Request, Response } from 'express';

// GET all admins
router.get('/', (req: Request, res: Response) => {
  res.json({
    admins: [
      { id: 1, name: 'Admin User 1', email: 'admin1@example.com' },
      { id: 2, name: 'Admin User 2', email: 'admin2@example.com' }
    ]
  });
});

// GET single admin
router.get('/:id', (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    name: 'Admin User 1',
    email: 'admin1@example.com',
    role: 'super_admin'
  });
});

// POST create admin
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Admin created successfully',
    admin: {
      id: 3,
      name: req.body?.name || 'New Admin',
      email: req.body?.email || 'newadmin@example.com'
    }
  });
});

module.exports = router;