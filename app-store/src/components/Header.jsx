import React from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';
import Footer from './Footer';





function Header() {
  return (
    <div>
        {/* ------------------ HEADER --------------- */}
        
        <div className='headerContainer'>
            <div className='navbar'> 

                <div className='navbar-logo'>
                    <NavLink className="navlink" to="/"><h3><span className='logoMy'>-My</span>Dietetic-</h3></NavLink>

                </div>


                <div className='navbar-list'>
                    <ul>
                        <li><a href="#plan">ÖĞÜN-PLANLA</a></li>
                        <li><a href="/login">GİRİŞ</a></li>
                        <li><a href="/register">HESAP</a></li>
                        <li><a href="/about">HAKKINDA</a></li>
                    </ul>
                </div>

            </div>

            <div className='headerImg'>
                <img src="https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> 
                <div className='searchButton'> 
                    <div className='searchButtonMiddle'>
                        <input type="text" placeholder ="How Much Calorie? " id="search" />        
                    </div>
                </div>
            </div>      
                
            

        </div>

        {/* ------------------ MAIN --------------- */}

        <div className='mainContainer'>
            <div className='explainList'>
                <div className='explainItem1'>
                    <div className='itemImage'>
                        <img src='https://media.istockphoto.com/id/1219808483/vector/document-list-with-tick-check-marks-on-clipboard-with-fork-and-tablespoon-utensils-vector.jpg?s=612x612&w=0&k=20&c=wOJmqM0-6XknDS1J3O82w0OQ5aC7Mqdxdy4RTKsVsqE=' alt=''/>
                    </div>
                    <div className='itemP'>
                        <h3>Hangi Yiyecekde Kaç Kalori Var Diye Endişelenme</h3>
                        <p>My Dietician ile kalorileri hesaplamak hiç bu kadar kolay olmamıştı!!</p>
                    </div>
                </div>
                <div className='explainItem2'>
                    <div className='itemP2'>             
                        <h3>Hemen Kendi Yemek Programını Oluştur</h3>
                        <p>Her öğününü kendin planla ve gün içinde kaç kalori aldığını öğren.</p>    
                    </div>
                    <div className='itemImage'>
                        <img src='https://media.istockphoto.com/id/1219808483/vector/document-list-with-tick-check-marks-on-clipboard-with-fork-and-tablespoon-utensils-vector.jpg?s=612x612&w=0&k=20&c=wOJmqM0-6XknDS1J3O82w0OQ5aC7Mqdxdy4RTKsVsqE=' alt=''/>
                    </div>
                       
                </div>
                <div className='explainItem3'>
                    <div className='itemImage'>
                        <img src='https://media.istockphoto.com/id/1219808483/vector/document-list-with-tick-check-marks-on-clipboard-with-fork-and-tablespoon-utensils-vector.jpg?s=612x612&w=0&k=20&c=wOJmqM0-6XknDS1J3O82w0OQ5aC7Mqdxdy4RTKsVsqE=' alt=''/>
                    </div>
                    <div className='itemP'>
                        <h3>Hangi Yiyecekde Kaç Kalori Var Diye Endişelenme</h3>
                            
                        <p>My Dietician ile kalorileri hesaplamak hiç bu kadar kolay olmamıştı!!</p>
                    </div>
                </div>

            </div>
                
        </div>


            
        

        {/* ------------------ ÖĞÜN PLANLAMA --------------- */}
        <div className='catolog'id='plan'>
            <h3 className='catolog-plan'>
                Ögün Programını Planla
            </h3>
            
            <div className='periodsList' >
                <div className='morningC'>
                    <div className='imageC'>
                        
                        <img src="https://images.unsplash.com/photo-1475855664010-a869729f42c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0JTIwaGVhbHR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
                        <div className='layer'>
                            <h2> SABAH YEMEK PROGRAMINI PLANLA</h2>
                        </div>
                    </div> 
                </div>
                <div className='lunchC'>
                    <div className='imageC'>
                        
                        <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaCUyMGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="" />
                        <div className='layer'>
                            <h2> ÖĞLE YEMEK PROGRAMINI PLANLA</h2>
                        </div>
                        
                    </div> 
                </div>
                <div className='dinnerC'>
                    <div className='imageC'>
                        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="" />
                        <div className='layer'>
                            <h2> AKŞAM YEMEK PROGRAMINI PLANLA</h2>
                        </div>
                    </div> 
                </div>
            </div>
        
        </div>
        <div>
            <Footer/>
        </div>

        
    </div>
    
  );
}

export default Header;