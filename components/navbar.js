import React from 'react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-14'>
        <div className='text-3xl font-semibold bg-gradient-to-r from-[#fe006d] to-[#023eff] bg-clip-text text-transparent'>
            Linkio <span className='absolute z-10 text-[17px] top-4 text-gray-400 '>®</span>
        </div>
        <button className='bg-[#0700ff] px-4 py-2 rounded-full font-semibold hover:shadow-[#0700ff] shadow-black transition-all shadow-md'>Contact Us</button>
    </div>
  )
}

export default Navbar