import React from 'react'

const allinfo = [
    {   
        
        name:"Shohag",
        age:21,
        email:"hridaymahmud01@gmail.com",
        phones:[{home:"01606620114",office:"+8809847392234"}],
        address:[{parmanent:"post:hatpangashi,thana:rayganj,dist:sirajganj",
       present:"thana:mirpur02 model thana,dist:dhaka,division:dhaka"}]

    },
    { 
        name:"Shampa",
        age:20,
        email:"shampa@gmail.com",
        phones:[{home:"01606620114",office:"+8809847392234"}],
        address:[{parmanent:"post:hatpangashi,thana:rayganj,dist:sirajganj",
       present:"thana:mirpur02 model thana,dist:dhaka,division:dhaka"}]

    },
    {
        name:"Dristy",
        age:21,
        email:"sanjidafrindristy@gmail.com",
        phones:[{home:"01606620114",office:"+8809847392234"}],
        address:[{parmanent:"post:hatpangashi,thana:rayganj,dist:sirajganj",
       present:"thana:mirpur02 model thana,dist:dhaka,division:dhaka"}]

    },
    {
        name:"Hriday",
        age:21,
        email:"shampa@gmail.com",
        phones:[{home:"01606620114",office:"+8809847392234"}],
        address:[{parmanent:"post:hatpangashi,thana:rayganj,dist:sirajganj",
       present:"thana:mirpur02 model thana,dist:dhaka,division:dhaka"}]

    }
]

   
const Info = () => {
  return (
   <div className='w-[1440px] grid grid-cols-2 p-5  mx-auto'>


       {
        allinfo.map((info,index)=>
     
        <div key={index} className='font-semibold text-xl mb-2 text-black text-start bg-orange-600 shadow-md shadow-gray-400 px-12  py-6 w-[650px] rounded-xl' >
            <h1 className='text-4xl  border-b-2 border-dashed border-white'>Info</h1>
           <div className='mt-3'>
           <p>Name:{info.name}</p>
            <p>Age:{info.age}</p>
            <p>Email:{info.email}</p>
        
        {
            
            info.address.map((a)=><div key={index}>
           
            <p>parmanent address:{a.parmanent}</p>
         
            <p>present {'\n'} address:{a.present}</p>
            </div>)
        }
          

            
        
           </div>
        </div>)
       }

    </div>


  )
}

export default Info