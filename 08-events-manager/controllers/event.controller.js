import fs from 'fs';

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
    const event = req.body;
    const db = fs.readFileSync('./db.json', 'utf-8');
    const parsedDb = JSON.parse(db);

    parsedDb.events.push(event);
    const stringifiedData = JSON.stringify(parsedDb);
    fs.writeFileSync('./db.json', stringifiedData);

    res.send(event);
};
