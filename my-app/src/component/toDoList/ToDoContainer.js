import React from 'react';
import ToDoList from './ToDoList';

const ToDoContainer = () => {
  const state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };
    return (
      <section>
        <h2>ToDoList를 구현해보고 싶다..</h2>
        <p>레이아웃 오또켕 잡는거야?</p>
        <ul>
          <ToDoList todos={state.todos}/>
          {/* todos={state.todos} 가 props로 전달된다. */}
        </ul>
      </section>
    );
  }
export default ToDoContainer;