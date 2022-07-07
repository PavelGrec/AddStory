import React from 'react'

const NavButton = ({text, fce}) => {
    function bla(){
        console.log('hi');
    }
    
  return (
    <button className='bg-white px-2 py-1 rounded-xl m-1' onClick={fce}>{text}</button>
  )
}

export default NavButton