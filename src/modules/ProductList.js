import React from 'react';
import { Layout, Product, Filter } from '../components';
export const ProductList = () => {

  return (
    
    <Layout className="product-list">
        <Filter/>
        <Product/>
    </Layout>

  );
};
