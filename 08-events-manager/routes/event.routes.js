import express from 'express';
import { getEvents, createEvent } from '../controllers/event.controller.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', createEvent);

export default router;
