import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumbs/Breadcrumb';
import Layout from '../components/Layout/Layout';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {all_product}=useContext(ShopContext)
    const {productId}=useParams();
    const product = all_product.find((e)=>e.id===Number(productId));
  return (
    <Layout title={"Product - Ecommerce App"}>
    <div>
        <Breadcrumb product={product}/>
        <ProductDisplay product={product}/>
    </div>
    </Layout>
  )
}
export default Product;