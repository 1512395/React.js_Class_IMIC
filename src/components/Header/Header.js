import React from 'react';
import hinh_dai_dien from './IMG_2885.JPG';
import '../App/App.css';

function Header(){
    return(
        <div>
            {/* <div>
                <img src={hinh_dai_dien} alt="hinh_dai_dien"/>
            </div> */}
            <h1>Tên: Ngũ Thượng Phát<br></br>
            Ngày sinh: 18/06/1997<br></br>
            SĐT: 0903978815<br></br>
            Email: nguthuongphat97@gmail.com</h1>
        </div>
    );
    
}

export default Header;