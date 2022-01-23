import React, { useState, useEffect } from 'react';
// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { dataProducts } from '../../data';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState('');

  useEffect(() => {
    const newProduct = dataProducts.find(
      (product) => Number(product._id) === Number(id)
    );
    if (newProduct) {
      setSingleProduct(newProduct);
    }
  }, []);

  // if (!singleProduct) {
  //   console.log('not found');
  //   return <div>Product not found</div>;
  // }

  const {
    _id: productId,
    name,
    category,
    image,
    price,
    description,
  } = singleProduct;

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs path={`Home / products / ${category} / ${name} `} />
        <section className="product-section container">
          <div className="img-col">
            <img src={image} alt="" />
          </div>
          <div className="info-col">
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>P{price}</h4>
            <div className="flex">
              <div className="quantity-container">
                <button className="quantity-btn">-</button>
                <p className="quantity">0</p>
                <button className="quantity-btn">+</button>
              </div>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
