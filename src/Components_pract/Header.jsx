import React from 'react'

function Header() {
  return (
    <div>
      <nav className='bg-emerald-900 flex justify-between items-center py-5 px-10'>
        <h2 className='text-xxl'>Ankit</h2>
        <div className='flex gap-10 items-center'>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Contact</h4>
          <h4 className='text-xl'>Services</h4>
          <h4 className='text-xl'>Accounts</h4>
        </div>
      </nav>
    </div>
  )
}

export default Header
