import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    return (
        <div>
            메인 페이지 입니다.
            <ul>
                <li><Link to="/product/1/abc?search=productName&q=demo#test">1번상품</Link></li>
                <li><Link to="/product/2/ccc?search=greengreen&q=abc#2번test">2번상품</Link></li>
            </ul>
        </div>
    );
};

export default Main;