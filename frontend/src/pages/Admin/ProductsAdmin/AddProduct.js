import React, { useState } from 'react';
import './AddProduct.css';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';

const AddProduct = ({ setShow, fetchProducts, showAlert }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [featured, setFeatured] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uploads');

    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/dspuu6dpz/image/upload',
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        name,
        image: url,
        category,
        description: desc,
        price,
        featured,
      };

      // post request
      await axios.post('/api/v1/products/new', newProduct);
      setShow(false);
      showAlert(true, 'success', 'product added successfully');
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-modal-overlay">
      <div className="add-modal">
        <h3>Add a new Cake</h3>
        <button onClick={() => setShow(false)} className="close-add-modal-btn">
          <IoMdClose />
        </button>

        <form className="add-product-form" onSubmit={handleCreate}>
          {/* image */}
          <div className="form-control">
            <label htmlFor="image">Choose an image</label>
            <input
              type="file"
              id="image"
              required={true}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          {/* name */}
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required={true}
              autoComplete="off"
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
              required={true}
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
              required={true}
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
              required={true}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* featured */}
          <div className="form-control">
            <button
              type="button"
              className={`featured-btn ${featured && 'featured-active'}`}
              onClick={() => setFeatured(!featured)}
            >
              Featured Product
            </button>
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
