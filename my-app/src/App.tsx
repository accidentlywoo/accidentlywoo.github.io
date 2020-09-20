import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
// 오또카징
const velogList = [
  {id: 1, title: "HOME"},
  {id: 2, title: "JAVA"},
  {id: 3, title: "SPRING"},
  {id: 4, title: "JPA"},
  {id: 5, title: "PYTHON"},
  {id: 6, title: "JAVASCRIPT"},
  {id: 7, title: "REACT"},
];

function App() {
  return (
    <div className="App container">
      <Header />
      <Nav />
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

function Header() { 
  return (
    <header>
      <h1>Accidentlywoo.Velog.io</h1>
      <small>백엔드의 대환장 프론트앤드 개발기</small>
    </header>
  );
}

function Nav() { 
  return (
      <nav>
        <ul>
          {velogList.map(el => (
            <li><Button variant="light">{el.title}</Button></li>
          ))}
        </ul>
      </nav>
  );
}

function Footer() { 
  return (
    <footer>
      <span>github: </span><a>https://github.com/accidentlywoo</a>
    </footer>
  );
}

export default App;
