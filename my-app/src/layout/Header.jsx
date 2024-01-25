import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header' >
      <ul>
        <li>
            <Link to="">Home</Link>
        </li>
        <li>
            <Link to="Wishlist">Wishlist</Link>
        </li>
        <li>
            <Link to="Add">Add</Link>
        </li>
        <li>
            <Link to="Basket">Basket</Link>
        </li>
        <i class="fa-solid fa-bars Icon"></i>
      </ul>
    </div>
  )
}

export default Header
