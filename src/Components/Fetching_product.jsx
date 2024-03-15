import React from 'react'
import products_info from './Products_info';
import {v4 as uuidv4} from 'uuid'
import Display_products from './Display_products';
const Fetching_product = () => {

  return (
  
    <div>
          <div className='bg-orange-500 pt-1 p-2'><h1 className='font-extrabold'>BD STORE</h1></div>
      <Display_products products={products_info} key={uuidv4()} />
    </div>
  )
}

export default Fetching_product;