const db = require('../config/db');
const Products = db.Products;

// Create a new product
function addProduct(req, res) {
    Products.create(req.body)
        .then(product => res.status(201).json(product))
        .catch(err => res.status(400).send(err.message));
}

// Get all products
function getProducts(req, res) {
    Products.findAll()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).send(err.message));
}

// Get product by ID
function getProduct(req, res) {
    Products.findByPk(req.params.id)
        .then(product => {
            if (!product) return res.status(404).send('Not found');
            res.status(200).json(product);
        })
        .catch(err => res.status(500).send(err.message));
}

// Update product
function updateProduct(req, res) {
    Products.findByPk(req.params.id)
        .then(product => {
            if (!product) return res.status(404).send('Not found');
            product.update(req.body)
                .then(updated => res.status(200).json(updated))
                .catch(err => res.status(400).send(err.message));
        })
        .catch(err => res.status(400).send(err.message));
}

// Delete product
function deleteProduct(req, res) {
    Products.findByPk(req.params.id)
        .then(product => {
            if (!product) return res.status(404).send('Not found');
            product.destroy()
                .then(() => res.status(200).send('Deleted'))
                .catch(err => res.status(500).send(err.message));
        })
        .catch(err => res.status(500).send(err.message));
}

module.exports = {
    addProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};








