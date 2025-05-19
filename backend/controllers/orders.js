const db = require('../config/db');
const Orders = db.Orders;

function addOrder(req, res) {
    Orders.create(req.body)
        .then(order => res.status(201).json(order))
        .catch(err => res.status(400).send(err.message));
}

function getOrders(req, res) {
    Orders.findAll()
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).send(err.message));
}

function getOrder(req, res) {
    Orders.findByPk(req.params.id)
        .then(order => {
            if (!order) return res.status(404).send('Not found');
            res.status(200).json(order);
        })
        .catch(err => res.status(500).send(err.message));
}

function updateOrder(req, res) {
    Orders.findByPk(req.params.id)
        .then(order => {
            if (!order) return res.status(404).send('Not found');
            order.update(req.body)
                .then(updated => res.status(200).json(updated))
                .catch(err => res.status(400).send(err.message));
        })
        .catch(err => res.status(400).send(err.message));
}

function deleteOrder(req, res) {
    Orders.findByPk(req.params.id)
        .then(order => {
            if (!order) return res.status(404).send('Not found');
            order.destroy()
                .then(() => res.status(200).send('Deleted'))
                .catch(err => res.status(500).send(err.message));
        })
        .catch(err => res.status(500).send(err.message));
}

module.exports = {
    addOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
};
