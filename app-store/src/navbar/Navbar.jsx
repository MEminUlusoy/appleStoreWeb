import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  return (
    <div>

      <div className='navbar'> 

        <div className='navbar-logo'>
          <NavLink className="navlink" to="/"><h3><span className='logoMy'>-My</span>Dietetic-</h3></NavLink>
        </div>


        <div className='navbar-list'>
          <ul>
            
            <li><a href="/login">GİRİŞ</a></li>
            <li><a href="/register">HESAP</a></li>
            <li><a href="/about">HAKKINDA</a></li>
          </ul>
        </div>
      </div>
        


    </div>
  );
}

export default Navbar;