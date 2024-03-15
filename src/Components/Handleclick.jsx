import React from 'react'

function Handleclick() {
    const handleclick = document.getElementById('handleclick');
  return (
    <div>
        {
            handleclick.addEventListener('click',()=>{
                console.log('clicked');
            })
        }
    </div>
  )
}

export default Handleclick