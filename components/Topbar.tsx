import React from 'react'

export default function Topbar() {
  return (
    <div className='bg-green-500 w-full h-[50px] flex justify-between items-center px-5'>
        <div>
            <h5 className='text-white font-semibold text-lg'>Admin BelanjaMuslim</h5>
        </div>
        <div>
            <a href="/" className='text-red-600' >Logout</a>
        </div>
    </div>
  )
}
