const db = require('../config/db');
const Users = db.Users;

function addUser(req, res) {
    Users.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).send(err.message));
}

function getUsers(req, res) {
    Users.findAll()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send(err.message));
}

function getUser(req, res) {
    Users.findByPk(req.params.id)
        .then(user => {
            if (!user) return res.status(404).send('Not found');
            res.status(200).json(user);
        })
        .catch(err => res.status(500).send(err.message));
}

function updateUser(req, res) {
    Users.findByPk(req.params.id)
        .then(user => {
            if (!user) return res.status(404).send('Not found');
            user.update(req.body)
                .then(updated => res.status(200).json(updated))
                .catch(err => res.status(400).send(err.message));
        })
        .catch(err => res.status(400).send(err.message));
}

function deleteUser(req, res) {
    Users.findByPk(req.params.id)
        .then(user => {
            if (!user) return res.status(404).send('Not found');
            user.destroy()
                .then(() => res.status(200).send('Deleted'))
                .catch(err => res.status(500).send(err.message));
        })
        .catch(err => res.status(500).send(err.message));
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
