import React from 'react';
import search from '../assets/icons/icons8-search.svg'
import shoppingCart from '../assets/icons/icons8-shopping-cart-64.png'

const Header = () => (
  <header className="py-4 flex items-center justify-between">
    <h3 className='px-3 text-xl font-semibold'>Logo</h3>
    <div className="flex items-center space-x-4 px-3">
      {['Home', 'Furniture', 'Product', 'Store'].map((item, idx) => (<a key={idx} href="/">{item}</a>))}
      <a className='w-[20px] h-[20px]' href="/">
        <img src={search} alt=""/>
      </a>
      <a className='w-[20px] h-[20px]' href="/">
        <img src={shoppingCart} alt=""/>
      </a>
    </div>
  </header>
);

export default Header;