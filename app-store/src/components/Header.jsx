import React from 'react';
import "../App.css";


function Header() {
  return (
    <div>
        <div className='headerContainer'>
            
            <div className='overlay'></div>
            
            <div className='searchButton'> 
                <div className='searchButtonMiddle'>
                    <input type="text" placeholder ="How Much Calorie? " id="search" />
                    
                </div>

            </div>
            <div className='mainContainer'>
                <div className='explainList'>
                    <div className='explainItem1'>
                        <div className='itemImage'>
                            <img src='https://media.istockphoto.com/id/1267161539/vector/meal-breaks-vector-line-icon-simple-thin-line-icon-premium-quality-design-element.jpg?s=612x612&w=0&k=20&c=9RNCS0uQvtbUGXqnmK1slk2y4rOOkJlE8bJ2W2qW9tY=' alt=''/>
                        </div>
                        <div className='itemP'>
                            <h2>Hangi Yiyecekde Kaç Kalori Var Diye Endişelenme</h2>
                            <p>My Dietician ile kalorileri hesaplamak hiç bu kadar kolay olmamıştı!!</p>
                        </div>
                    </div>
                    <div className='explainItem2'>
                        <div className='itemP'>             
                            <h2>Hemen Kendi Yemek Programını Oluştur</h2>
                            <p>Her öğününü kendin planla ve gün içinde kaç kalori aldığını öğren.</p>    
                        </div>
                        <div className='itemImage'>
                            <img src='https://media.istockphoto.com/id/1267161539/vector/meal-breaks-vector-line-icon-simple-thin-line-icon-premium-quality-design-element.jpg?s=612x612&w=0&k=20&c=9RNCS0uQvtbUGXqnmK1slk2y4rOOkJlE8bJ2W2qW9tY=' alt=''/>
                        </div>
                       
                    </div>
                    <div className='explainItem3'>
                        <div className='itemImage'>
                            <img src='https://media.istockphoto.com/id/1267161539/vector/meal-breaks-vector-line-icon-simple-thin-line-icon-premium-quality-design-element.jpg?s=612x612&w=0&k=20&c=9RNCS0uQvtbUGXqnmK1slk2y4rOOkJlE8bJ2W2qW9tY=' alt=''/>
                        </div>
                        <div className='itemP'>
                            <h3>Hangi Yiyecekde Kaç Kalori Var Diye Endişelenme</h3>
                            <p>My Dietician ile kalorileri hesaplamak hiç bu kadar kolay olmamıştı!!</p>
                        </div>
                    </div>

                </div>
                
            </div>


            
        </div>

    </div>
  );
}

export default Header;