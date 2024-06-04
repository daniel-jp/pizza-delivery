import './styles.css'

import StepsHeader from './StepsHeader'
import ProductList from './ProductList'
import { useEffect, useState } from 'react'
import {OrderLocationData, Product} from"./types";
import { fetchProduct } from '../api';
import { OrderLocation } from './OrderLocation';

function Orders() {
const [products, setProducts ]= useState<Product[]>([]);
const [orderLocation, setOrderLocation]=useState<OrderLocationData>();
//console.log(products);

  useEffect(()=>{
    fetchProduct()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error) )

  },[]);

  return ( 
    <div className="orders-container">
      <StepsHeader/> 
      <ProductList products={products }/>
      <OrderLocation onChangeLocation={locatiom => setOrderLocation(locatiom)}/>
   </div>
  ) 
}

export default Orders
