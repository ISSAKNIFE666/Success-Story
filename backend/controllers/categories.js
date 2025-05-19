const db = require('../config/db');
const Categories = db.Categories;

function addCategory(req, res) {
    Categories.create(req.body)
        .then(category => res.status(201).json(category))
        .catch(err => res.status(400).send(err.message));
}

function getCategories(req, res) {
    Categories.findAll()
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(500).send(err.message));
}

function getCategory(req, res) {
    Categories.findByPk(req.params.id)
        .then(category => {
            if (!category) return res.status(404).send('Not found');
            res.status(200).json(category);
        })
        .catch(err => res.status(500).send(err.message));
}

function updateCategory(req, res) {
    Categories.findByPk(req.params.id)
        .then(category => {
            if (!category) return res.status(404).send('Not found');
            category.update(req.body)
                .then(updated => res.status(200).json(updated))
                .catch(err => res.status(400).send(err.message));
        })
        .catch(err => res.status(400).send(err.message));
}

function deleteCategory(req, res) {
    Categories.findByPk(req.params.id)
        .then(category => {
            if (!category) return res.status(404).send('Not found');
            category.destroy()
                .then(() => res.status(200).send('Deleted'))
                .catch(err => res.status(500).send(err.message));
        })
        .catch(err => res.status(500).send(err.message));
}

module.exports = {
    addCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
};
