//6.28 중첩라우팅 - 2. 부모 Routre의 path마지막에 /* 표시
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Info1 from './Info1';
import Info2 from './Info2';

const Info = (props) => {
    return (
        <div>
            정보 페이지 입니다.
            {/* ✔ 서브라우터들을 컴포넌트 안에 작성 */}
            {/* ✔ 서브라우터는 앞에 슬러시(/) 안적고 적어주면됨 */}
            {/* 중첩라우팅 - 2방법 불러오게 한거 */}
            <div>
                <Link to="info1">정보1</Link>
                <Link to="info2">정보2</Link>
            </div>
            {/* 중첩라우팅 - 1방법 불러오게 한거 */}
            <Routes>
                <Route path="info1" element={<Info1/>}/>
                <Route path="info2" element={<Info2/>}/>
                <Route/>
            </Routes>
        </div>
    );
};

export default Info;