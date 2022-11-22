import React from 'react';
import Navbar from  "../navbar/Navbar";
import "../navbar/navbar.css";
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

function Login() {
  return (
    <div>
        
      <Navbar/>
        
      <div className='loginBackground'>
        <img src="https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        <div className='loginPanel'>
          <div className='loginItem'>
            <h2>Oturum Aç</h2>
            
            <input type="text" name="" id="" placeholder='E-Posta Adresi' />
            <input type="password" name="" id="" placeholder='Şifre' />
            <NavLink className = "navlink"to = "register">Şifrenizi mi unuttunuz?</NavLink>
            <button>OTURUM AÇ</button>
          </div>
        </div>
      </div>

      <Footer/>


    </div>
  );
}

export default Login;