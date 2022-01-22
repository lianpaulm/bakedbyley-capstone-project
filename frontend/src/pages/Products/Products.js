import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Products.css';

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <div className="page-path">
          <div className="container">
            <p>Home / products</p>
          </div>
        </div>
        <div className="products container ">
          {/* filters */}
          <div className="filter-container">
            <p>Filter</p>
          </div>

          {/* products */}
          <div className="products-container">
            {/* single card */}
            <div className="card">
              <a href="/products/product">
                <img src="images/products/cake2.jpg" alt="" />
              </a>
              <div className="card-info">
                <p className="card-name">Chocolate Cake</p>
                <div>
                  <div className="price">P900</div>
                  <button className="add-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
            {/* single card */}
            <div className="card">
              <a href="/products/product">
                <img src="images/products/cake2.jpg" alt="" />
              </a>
              <div className="card-info">
                <p className="card-name">Chocolate Cake</p>
                <div>
                  <div className="price">P900</div>
                  <button className="add-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
            {/* single card */}
            <div className="card">
              <a href="/products/product">
                <img src="images/products/cake2.jpg" alt="" />
              </a>
              <div className="card-info">
                <p className="card-name">Chocolate Cake</p>
                <div>
                  <div className="price">P900</div>
                  <button className="add-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
            {/* single card */}
            <div className="card">
              <a href="/products/product">
                <img src="images/products/cake2.jpg" alt="" />
              </a>
              <div className="card-info">
                <p className="card-name">Chocolate Cake</p>
                <div>
                  <div className="price">P900</div>
                  <button className="add-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
            {/* single card */}
            <div className="card">
              <a href="/products/product">
                <img src="images/products/cake2.jpg" alt="" />
              </a>
              <div className="card-info">
                <p className="card-name">Chocolate Cake</p>
                <div>
                  <div className="price">P900</div>
                  <button className="add-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
            {/* single card */}
            <div className="card">
              <a href="/products/product">
                <img src="images/products/cake2.jpg" alt="" />
              </a>
              <div className="card-info">
                <p className="card-name">Chocolate Cake</p>
                <div>
                  <div className="price">P900</div>
                  <button className="add-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
