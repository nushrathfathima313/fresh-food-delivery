import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isResponsive, setIsResponsive] = useState(false); // State for responsive mode
  const { cartItems } = useContext(StoreContext);

  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state as user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add logic here to handle search query, such as redirecting to search results page
    console.log('Search submitted:', searchQuery);
    // Clear search query after submission if needed
    setSearchQuery('');
  };

  const handleResponsiveToggle = () => {
    setIsResponsive(!isResponsive); // Toggle responsive mode
  };

  return (
    <div className={`navbar ${isResponsive ? 'responsive' : ''}`}>
      <Link to='/'>
        <img className='logo' src={assets.logo} alt='' style={{ width: '183px', height: '94px' }} />
      </Link>
      <ul className='navbar-menu'>
        <li>
          <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>menu</a>
        </li>
        <li>
          <a href='#app-download' onClick={() => setMenu("About")} className={`${menu === "About" ? "active" : ""}`}>About</a>
        </li>
        <li>
          <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
        </li>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-container'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='' />
          <div className='cart-item-count'>{getTotalCartAmount()}</div>
        </Link>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
