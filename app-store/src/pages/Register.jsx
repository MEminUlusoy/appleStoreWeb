import React from 'react';
import Navbar from  "../navbar/Navbar";
import "../navbar/navbar.css";
import Footer from '../components/Footer';

function Register() {
  return (
    <div>
        <Navbar/>
        
        <div className='registerBackground'>
            <img src="https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            <div className='registerPanel'>
                <div className='registerItem'>
                <h2>Hesap Oluştur</h2>
            
                <input type="text" name="" id="" placeholder='İsim' />
                <input type="text" name="" id="" placeholder='Soyisim' />
                <input type="text" name="" id="" placeholder='E-Posta Adresi' />
                <input type="password" name="" id="" placeholder='Şifre' />
                
                <button>HESAP OLUŞTUR</button>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  );
}

export default Register;