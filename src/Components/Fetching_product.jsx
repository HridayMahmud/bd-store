import React from 'react'
import products_info from './Products_info';
import {v4 as uuidv4} from 'uuid'
import Display_products from './Display_products';
const Fetching_product = () => {

  return (
  
    <div>
         
      <Display_products products={products_info} key={uuidv4()} />
    </div>
  )
}

export default Fetching_product;