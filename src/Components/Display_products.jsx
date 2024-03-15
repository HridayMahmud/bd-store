import React from 'react'

const Display_products = (props) => {
 const {products,key} = props;
  return (
    <div  className=' grid grid-cols-3 pt-4 '>
   {
    products.map((info)=>
    <div key={key} className='Card  w-[420px]  mb-5  py-8 bg-white shadow-lg shadow-gray-300 rounded-xl '>
      <div className="cards w-[380px] mx-auto py-4 space-y-2 border-2 rounded-xl border-gray-100 h-[400px]  ">
        
    <figure>
      <img className='w-[250px] h-[180px] p-2 border-dashed border-2 border-gray-300 mx-auto rounded-xl mb-3' src={info.image} alt="clothes" />
    </figure>
    
    <h1 className='text-sm font-bold'>{info.des}</h1>
    <p className='text-sm font-semibold text-[navy]'>Price: {info.price}</p>
    <h2 className='text-3xl text-red-700 font-bold'>{info.rating}</h2>
    <div className="button">
    <button id='handleclick' className='btn btn-primary w-[100px]'>Add to cart</button>
    </div>
      </div>
    </div>)

   }
  
    </div>
  )
}

export default Display_products