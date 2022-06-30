import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailProduct = (props) => {
    return (
        <div>
            상품 자세히 보기입니다.
            {/* 자세히 보기페이지 안에 자세히보기1/자세히보기2가 있으니까 여기에 Outlet 적어준다! */}
            <Outlet/>
        </div>
    );
};

export default DetailProduct;