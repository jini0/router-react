import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                {/* 
                ๐งกNavLink๐งก
                - ํด๋ฆญํ๋ฉด ์๋์ผ๋ก active๋ผ๋ ํด๋์ค๊ฐ ๋ถ์ */}
                {/* isActive : active๊ฐ ๋ถ์๋์ง ์๋ถ์๋์ง ์ฒดํฌ(๋ถ์์ผ๋ฉด true/์๋ถ์์ผ๋ฉด false) -> active๊ฐ ์๋ okay๊ฐ ์ด์  ๋ถ์๊ฑฐ! */}
                <li><NavLink to="/" className={({isActive})=>isActive? "okay" : ""}>๋ฉ์ธํ์ด์ง</NavLink></li>
                <li><NavLink to="/product/*/*" className={({isActive})=> "green " + (isActive? "okay" : "")}>์ํํ์ด์ง</NavLink></li>
                <li><NavLink to="/detail" className={({isActive})=>isActive? "okay" : ""}>์ํ์์ธํ๋ณด๊ธฐ</NavLink></li>
                <li><NavLink to="/detail/detail1" className={({isActive})=>isActive? "okay" : ""}>1๋ฒ์ํ์์ธํ๋ณด๊ธฐ</NavLink></li>
                <li><NavLink to="/detail/detail2" className={({isActive})=>isActive? "okay" : ""}>2๋ฒ์ํ์์ธํ๋ณด๊ธฐ</NavLink></li>
                <li><NavLink to="/info" className={({isActive})=>isActive? "okay" : ""}>์ ๋ณด๋ณด๊ธฐ</NavLink></li>


                {/* 
                ๐Link to="/"๐  
                -> aํ๊ทธ์ href์์ฑ๊ณผ ๊ฐ๋ค๊ณ  ์๊ฐํ์! // ๊ทธ์น๋ง Link๋ handleclick!
                - F12ํด์ ์ฝ๋๋ฅผ ๋ณด๋ฉด <a href="/">๋ฉ์ธํ์ด์ง</a> ์ด๋ ๊ฒ aํ๊ทธ๋ก ๋์ด์์!! ์ฐจ์ด์ ์ ๋ญ๊น..?!
                - aํ๊ทธ๋ก ์ ์ด์ฃผ๋ฉด ์๋ก๊ณ ์นจ๋จ(์๋ก ๋ถ๋ฌ์ด)_ํ์ด์ง ์ด๋์ด๋๋๊ฑฐ  
                ==> aํ๊ทธ๊ฐ ์๋๋ผ Link๋ฅผ ์จ์ผํ๋ค! ์๋ฅผ ์จ์ผ aํ๊ทธ์ ๊ฑธ๋ฆฐ ์ด๋ฒคํธ๋ฅผ ์๋ ์ ๊ฑฐํด์ฃผ๊ณ  ํธํ๊ฒ?๋ฐ๊ฟ์ฃผ๋ ์ ์!
                */}
                {/* <li><Link to="/">๋ฉ์ธํ์ด์ง</Link></li>
                <li><Link to="/product">์ํํ์ด์ง</Link></li>
                <li><Link to="/detail">์ํ์์ธํ๋ณด๊ธฐ</Link></li> */}
            </ul>
        </div>
    );
};

export default Header;