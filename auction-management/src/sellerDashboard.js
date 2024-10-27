import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/seller.css';

const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        image: '',
        price: '',
        description: '',
        bidDuration: '',
        startingPrice: '',
    });
    const [messages, setMessages] = useState([]);
    const [reports, setReports] = useState([]);
    const [receivedPayments, setReceivedPayments] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
                setNewProduct({ ...newProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const addProduct = () => {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setNewProduct({ image: '', price: '', description: '', bidDuration: '', startingPrice: '' });
        setUploadedImage(null);
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const downloadReport = () => {
        alert("Report downloaded!");
    };

    return (
        <div className="container">
            <h2>Seller Dashboard</h2>

            {/* Add New Product Section */}
            <div className="add-product mb-4 card p-3">
                <h3>Add New Product</h3>
                <div className="form-group">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="form-control mb-2"
                    />
                    {uploadedImage && <img src={uploadedImage} alt="Product Preview" className="img-thumbnail mb-2" />}
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="bidDuration"
                        placeholder="Bid Duration (hours)"
                        value={newProduct.bidDuration}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="startingPrice"
                        placeholder="Starting Price"
                        value={newProduct.startingPrice}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                    <button onClick={addProduct} className="btn btn-primary">Add Product</button>
                </div>
            </div>

            {/* Products Section */}
            <div className="product-list mb-4 card p-3">
                <h3>Your Products</h3>
                <ul className="list-group">
                    {products.map(product => (
                        <li key={product.id} className="list-group-item">
                            <h5>{product.description}</h5>
                            <img src={product.image} alt={product.description} className="product-image" />
                            <p>Price: ${product.price}</p>
                            <p>Bid Duration: {product.bidDuration} hours</p>
                            <p>Starting Price: ${product.startingPrice}</p>
                            <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Messages Section */}
            <div className="messages mb-4 card p-3">
                <h3>Messages</h3>
                <ul className="list-group">
                    {messages.map((msg, index) => (
                        <li key={index} className="list-group-item">{msg}</li>
                    ))}
                </ul>
            </div>

            {/* Reports Section */}
            <div className="reports mb-4 card p-3">
                <h3>Reports</h3>
                <button onClick={downloadReport} className="btn btn-success">Download Reports</button>
            </div>

            {/* Received Payments Section */}
            <div className="payments mb-4 card p-3">
                <h3>Received Payments</h3>
                <ul className="list-group">
                    {receivedPayments.map((payment, index) => (
                        <li key={index} className="list-group-item">{payment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SellerDashboard;
