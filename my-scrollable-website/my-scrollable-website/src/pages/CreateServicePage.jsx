// src/pages/CreateServicePage.jsx
import React, { useState } from 'react';
import '../styles/CreateServicePage.css'; 

const CreateServicePage = () => {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionWordCount, setDescriptionWordCount] = useState(0);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([
    'Category 1',
    'Category 2',
    'Category 3',
    // Add more categories dynamically if needed
  ]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      serviceName,
      price,
      description,
      image,
      category,
    });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value)) {
      setPrice(value);
    }
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    const words = value.trim().split(/\s+/);
    if (words.length <= 200) {
      setDescription(value);
      setDescriptionWordCount(words.length);
    }
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    if (value) {
      const filtered = categories.filter(cat => cat.toLowerCase().includes(value.toLowerCase()));
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  const selectCategory = (cat) => {
    setCategory(cat);
    setFilteredCategories([]);
  };

  return (
    <div className="create-service-page">
      <h1 className="title">Create Service Page</h1>
      <form className="create-service-form" onSubmit={handleSubmit}>
        <div className="form-group responsive-row">
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="form-input"
            placeholder="e.g., House Cleaning"
          />
        </div>
        <div className="form-group responsive-row">
          <label className="form-label">Price:</label>
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            className="form-input"
            placeholder="e.g., 19.99"
          />
        </div>
        <div className="form-group responsive-row">
          <label className="form-label">Description:</label>
          <div className="form-textarea-wrapper">
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="form-textarea"
            />
            <div className="word-count">
              {descriptionWordCount} / 200 words
            </div>
          </div>
        </div>
        <div className="form-group responsive-row">
          <label className="form-label">Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="form-input"
          />
        </div>
        <div className="form-group responsive-row">
          <label className="form-label">Category:</label>
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            className="form-input"

          />
          {filteredCategories.length > 0 && (
            <ul className="category-list">
              {filteredCategories.map((cat, index) => (
                <li key={index} onClick={() => selectCategory(cat)}>
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="submit-button">Create Service</button>
      </form>
    </div>
  );
};

export default CreateServicePage;
