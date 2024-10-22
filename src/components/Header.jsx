import React from 'react'
import './Header.css'
import user from '../assets/img/user.jpg'
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className='header'>
      <div className="search-bar">
        <FaSearch />
        <input type="search" placeholder="Search..." />
      </div>
      <div className="user-info">
        <IoIosNotifications />
        <img src={user} alt="user" className="user-img" />
      </div>
    </div>
  )
}

export default Header