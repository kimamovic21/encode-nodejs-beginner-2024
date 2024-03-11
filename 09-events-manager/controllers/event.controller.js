import fs from 'fs';
import { v4 as uuid } from 'uuid';

export const getEvents = (req, res) => {
    try {
        const db = fs.readFileSync('./db.json', 'utf-8');
        const parsedDb = JSON.parse(db);
        const { events } = parsedDb;
        res.send(events);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Something went wrong`);
    };
};

export const createEvent = (req, res) => {
    try {
        const event = req.body;
        const id = uuid();
        const db = fs.readFileSync('./db.json', 'utf-8');
        const parsedDb = JSON.parse(db);
        const newEvent = { ...event, id};
    
        parsedDb.events.push(newEvent);
        const stringifiedData = JSON.stringify(parsedDb, null, '\t');
        fs.writeFileSync('./db.json', stringifiedData);
    
        res.status(201).send(newEvent);
    } catch (error) {
        res.status(500).send('Could not create event!');        
    };
};

export const getEventById = (req, res) => {
    try {
        const { id } = req.params;
    
        const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        const { events } = db;
        const event = events.find((event) => event.id === id);
    
        if (event) {
            res.send(event)
        } else {
            res.status(404).send('Could not found event');
        };
    } catch (error) {
        res.status(500).send('Something went wrong');
    };
};

export const updateEvent = (req, res) => {
    const { id } = req.params;
    const event = req.body;
    
    try {
        const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        const eventIndex = db.events.findIndex((event) => event.id === id);
        db.events[eventIndex] = event;

        fs.writeFileSync('./db.json', JSON.stringify(db, null, '\t'));
        res.send(event);
    } catch (error) {
        res.status(500).send('Could not update event');
    };
};

export const deleteEvent = (req, res) => {
    const { id } = req.params;

    try {
        const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        const eventIndex = db.events.findIndex((event) => event.id === id);
        
        if (eventIndex !== -1) {
            db.events.splice(eventIndex, 1);
            fs.writeFileSync('./db.json', JSON.stringify(db, null, '\t'));
            res.status(204).send('The event was successfully deleted'); 
        } else {
            res.status(404).send('Could not found event');
        };
    } catch (error) {
        res.status(500).send('Could not delete event');
    };
};

export const registerAttendee = (req, res) => {
    const { id } = req.params;

    try {
        const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        const eventIndex = db.events.findIndex((event) => event.id === id);

        if (db.events[eventIndex].registrationLimit > db.events[eventIndex].registeredUsersCounter) {
            db.events[eventIndex].registeredUsersCounter += 1;

            fs.writeFileSync('./db.json', JSON.stringify(db, null, '\t'));

            res.send({ registeredUsersCounter: db.events[eventIndex].registeredUsersCounter });
        } else {
            res.status(401).send('Registration limit has exceeded!');
        };

    } catch (error) {
        res.status(500).send('Could not register attendee!');
    };
};
