import React from 'react'

function Header() {
  return (
    <>
    <header className='flex_container'>
    <div className='check_div'>
        <input type="checkbox" name="" id="" />
    </div>
    <div>
        <h3>Name</h3>
    </div>
    <div>
        <h3>Email</h3>
    </div>
    <div>
        <h3>Role</h3>
    </div>
    <div>
       <h3> Actions</h3>
    </div>
    </header>
    </>
  )
}

export default Header