import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import { IoMdClose } from 'react-icons/io';

const AddProduct = ({ handleClose }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [featured, setFeatured] = useState(true);

  const handleCreate = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-modal-overlay">
      <div className="add-modal">
        <h3>Add a new Cake</h3>
        <button onClick={handleClose} className="close-add-modal-btn">
          <IoMdClose />
        </button>

        <form className="add-product-form" onSubmit={handleCreate}>
          {/* image */}
          <div className="form-control">
            <label htmlFor="image">Choose an image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          {/* name */}
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* price */}
          <div className="form-control">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* description */}
          <div className="form-control">
            <label htmlFor="desc">Description</label>
            <textarea
              rows="3"
              type="text"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          {/* category */}
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* featured */}
          <div className="form-control featured-control">
            <label for="featured">Featured</label>
            <input
              type="checkbox"
              id="featured"
              name="featured"
              value={featured}
              onChange={(e) => setFeatured(e.target.value)}
            />
          </div>

          {/* submit btn */}
          <div className="form-control">
            <button type="submit" className="create-product-btn">
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
