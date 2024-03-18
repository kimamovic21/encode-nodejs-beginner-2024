import { v4 as uuid } from 'uuid';

let users = [];

export const getAllUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    res.send(user);
};

export const getSingleUser = (req, res) => {
    const userId = req.params.id;

    const user = users.find(user => user.id === userId);

    if (!user) {
        res.status(404).send('User not found');
        return;
    };

    res.send({
        id: user.id,
        username: user.username,
        age: user.age
    });
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    res.send(user);
};

export const deleteUser = (req, res) => { 
    users = users.filter((user) => user.id !== req.params.id);

    res.send('User deleted');
};
