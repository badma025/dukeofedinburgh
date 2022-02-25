import React from 'react'

function Header() {
  return (
    <nav className="flex items-center justify-between">
      <a className="text-2xl font-semibold text-white" href="#">
        Liondo
      </a>
      <ul className="hidden lg:flex gap-x-16 items-center tracking-wider text-gray-300">
        <li key="item" className='transition hover:text-white hover:scale-105 duration-300'>
          <a href="#">Rankings</a>
        </li>
        <li key="item" className='transition hover:text-white hover:scale-105 duration-300'>
          <a href="#">Data</a>
        </li>
        <li key="item" className='transition hover:text-white hover:scale-105 duration-300'>
          <a href="#">Solution</a>
        </li>
        <li key="item" className='transition hover:text-white hover:scale-105 duration-300'>
          <a href="#">Pricing</a>
        </li>
        <li key="item" className='transition hover:text-white hover:scale-105 duration-300'>
          <a href="#">Resources</a>
        </li>
      </ul>
      <button className="py-3 px-6 font-medium tracking-wider leading-5 text-white rounded-md border-2 border-gray-800 transition hover:text-gray-900 hover:bg-teal-300">
        Get Started
      </button>
    </nav>
  );
}

export default Header