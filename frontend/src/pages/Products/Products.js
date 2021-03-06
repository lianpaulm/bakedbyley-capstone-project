import React, { useState, useEffect } from 'react';
// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Loading from '../../components/Loading/Loading';
import FilterProducts from './FilterProducts';
// style
import './Products.css';
// route
import { Link } from 'react-router-dom';
// axios
import axios from 'axios';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [productsFetch, setProductsFetch] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/api/v1/products');
      setProductsFetch(data.products);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  const allCategories = [
    'all',
    ...new Set(productsFetch.map((product) => product.category)),
  ];

  const filterProducts = (category) => {
    if (category === 'all') {
      setProducts(productsFetch);
      return;
    }
    const newProducts = productsFetch.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
  };

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs path={'Home / Cakes'} />
        <div className="products container ">
          <FilterProducts
            categories={allCategories}
            filterProducts={filterProducts}
          />

          <div className="products-container">
            {products
              .map((product) => {
                const { _id, name, image, price } = product;
                return (
                  <Link to={_id} key={_id}>
                    <div className="card">
                      <img src={image} alt="" />
                      <div className="card-info">
                        <p className="card-name">{name}</p>
                        <div className="card-info-footer">
                          <div className="price">
                            <span className="peso-sign">&#8369;</span>
                            {price[0].price}.00
                          </div>
                          <button className="add-cart-btn">View Cake</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
              .reverse()}
          </div>
          {/* end of products */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
