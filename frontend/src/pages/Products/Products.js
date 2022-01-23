import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FilterProducts from './FilterProducts';
import { dataProducts } from '../../data';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState(dataProducts);
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs path={'Home / products'} />
        <div className="products container ">
          <FilterProducts />

          <div className="products-container">
            {products.map((product) => {
              const { _id, name, image, price } = product;
              return (
                <Link to={_id} key={_id}>
                  <div className="card">
                    <img src={image} alt="" />
                    <div className="card-info">
                      <p className="card-name">{name}</p>
                      <div>
                        <div className="price">P{price}</div>
                        <button className="add-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* end of products */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
