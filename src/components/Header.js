import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                {/* 
                🧡NavLink🧡
                - 클릭하면 자동으로 active라는 클래스가 붙음 */}
                {/* isActive : active가 붙었는지 안붙었는지 체크(붙었으면 true/안붙었으면 false) -> active가 아닌 okay가 이제 붙을거! */}
                <li><NavLink to="/" className={({isActive})=>isActive? "okay" : ""}>메인페이지</NavLink></li>
                <li><NavLink to="/product/*/*" className={({isActive})=> "green " + (isActive? "okay" : "")}>상품페이지</NavLink></li>
                <li><NavLink to="/detail" className={({isActive})=>isActive? "okay" : ""}>상품자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail1" className={({isActive})=>isActive? "okay" : ""}>1번상품자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail2" className={({isActive})=>isActive? "okay" : ""}>2번상품자세히보기</NavLink></li>
                <li><NavLink to="/info" className={({isActive})=>isActive? "okay" : ""}>정보보기</NavLink></li>


                {/* 
                💙Link to="/"💙  
                -> a태그의 href속성과 같다고 생각하자! // 그치만 Link는 handleclick!
                - F12해서 코드를 보면 <a href="/">메인페이지</a> 이렇게 a태그로 되어있음!! 차이점은 뭘까..?!
                - a태그로 적어주면 새로고침됨(새로 불러옴)_페이지 이동이되는거  
                ==> a태그가 아니라 Link를 써야한다! 얘를 써야 a태그에 걸린 이벤트를 자동 제거해주고 편하게?바꿔주는 애임!
                */}
                {/* <li><Link to="/">메인페이지</Link></li>
                <li><Link to="/product">상품페이지</Link></li>
                <li><Link to="/detail">상품자세히보기</Link></li> */}
            </ul>
        </div>
    );
};

export default Header;