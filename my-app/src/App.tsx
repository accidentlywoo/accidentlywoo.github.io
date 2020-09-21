import React from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import Footer from './component/Footer';
import ToDoContainer from './component/toDoList/ToDoContainer';
// import { Button, ButtonToolbar } from 'react-bootstrap';
import './css/reset.css';
import './css/main.css';


function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Nav />
      <ToDoContainer />
      <section>
        <h2></h2>
        <p>최신글 메인1개</p>
      </section>
      <section>
        <h2>ToDoList인척하다 나중에 블로그리스트</h2>
        <p>
          무한 스크롤 블로그 글 뿌리기,
          CSS BootStrap 활용하기 : 어떻게 적용하는거야?
        </p>
        <p>패키지 구조는 어떻게 한담... ㅠㅠ</p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
