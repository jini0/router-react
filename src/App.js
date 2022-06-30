//6.28 리액트 라우터
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import DetailProduct from './components/DetailProduct';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Detail1 from './components/Detail1';
import Detail2 from './components/Detail2';
import Info from './components/Info';

function App() {
  return (
    // 라우터들로 감싸주면 그 규칙이 일치하는 애들만 불러줌
    <BrowserRouter>
    <div className="App">
      <Header/>
      {/* 💚 https://reactrouter.com/docs/en/v6/getting-started/tutorial#tutorial tutorial보면서 그대로 해주면 됨💚
      Routes컴포넌트는 여러 Route를 감싸서 그 중 url이 일치하는 라우트 단 하나만 랜더링 시켜줌 
      Route는 path속성에 경로, element속성에 컴포넌트를 넣어줌
      cf. <Route path="/" element={<App />} /> 튜토리얼에 이렇게 되어 있는데, <App />에는 넣어줄 페이지?를 넣어주면됨!
      */}
      {/* <Route path="/product/:productId/:productName" element={<Product/>} /> -> :productId/:productName 이렇게 경로를 여러개를 줄 수 있음! */}
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:productId/:productName" element={<Product/>} />
        <Route path="/detail" element={<DetailProduct/>}>
          <Route path="detail1" element={<Detail1/>}/>
          <Route path="detail2" element={<Detail2/>}/>
        </Route>
        {/* 💛/* : 중첩라우팅을 쓰겠다! 의미(부모 Route의 path마지막에 /* 표시)  */}
        <Route path="info/*" element={<Info/>}/>
        {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
