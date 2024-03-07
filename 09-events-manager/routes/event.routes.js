import express from 'express';
import { getEvents, createEvent, getEventById, updateEvent, deleteEvent, registerAttendee } from '../controllers/event.controller.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.get('/:id', getEventById);
router.put('/:id', updateEvent); 
router.delete('/:id', deleteEvent);

router.post('/register/:id', registerAttendee);

export default router;
