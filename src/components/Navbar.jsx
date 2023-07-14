import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="flex-between w-full mb-16 pt-3">
        <a href="/" className="flex gap-2 flex-center">
          <img  className='object-contain' width={30} height={30}  src="/images/logo.svg" alt="logo" />

          <p className="logo_text">Registry</p>
        </a>

        
 
      </nav>
    </>
  )
}

export default Navbar