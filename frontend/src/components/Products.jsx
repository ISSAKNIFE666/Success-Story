import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get('http://localhost:8080/api/products'),
        axios.get('http://localhost:8080/api/categories')
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const handleCreateProduct = async (productData) => {
    try {
      await axios.post('http://localhost:8080/api/products', productData);
      await loadData();
      setShowProductForm(false);
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again.');
    }
  };

  const handleUpdateProduct = async (productData) => {
    try {
      await axios.put(`http://localhost:8080/api/products/${editingProduct.id}`, productData);
      await loadData();
      setShowProductForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product. Please try again.');
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    
    try {
      await axios.delete(`http://localhost:8080/api/products/${productId}`);
      await loadData();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (editingProduct) {
      return handleUpdateProduct(formData);
    }
    return handleCreateProduct(formData);
  };

  const filteredProducts = products.filter(product => 
    !selectedCategory || product.category === selectedCategory
  );

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setEditingProduct(null);
            setShowProductForm(true);
          }}
        >
          Add New Product
        </button>
      </div>
      
      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="card product-card"
          >
            <div className="product-image">
              {product.image_url && <img src={product.image_url} alt={product.name} />}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <p>{product.description}</p>
              <p>In Stock: {product.stock}</p>
              <div className="product-actions">
                <button
                  className="btn"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showProductForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => {
              setShowProductForm(false);
              setEditingProduct(null);
            }}>×</button>
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <ProductForm
              product={editingProduct}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setShowProductForm(false);
                setEditingProduct(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products; 