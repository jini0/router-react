import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Product = (props) => {
    //*useParams() 파라미터값을 가지고 있는 객체를 반환
    //구조분해할당한거 {중괄호}
    const { productId, productName } = useParams();
    //*useLocation() 쿼리스트링 값을 가지고 있는 객체를 반환
    //객체로 바로 받은거
    const location = useLocation();
    // console.log(useParams());
    console.log(useLocation());
    return (
        <div>
            { productId } 상품페이지 입니다.
            <div>{productName} 페이지 입니다.</div>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>key : {location.key}</li>
                {/* key값은 계속 바뀜 */}
            </ul>
        </div>
    );
};

export default Product;

//💛useParams()
// https://velog.io/@nemo/useParams