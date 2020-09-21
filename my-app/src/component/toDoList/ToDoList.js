import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props){
    return (
        <ul>
          {props.todos.map(todo => (
              <ToDoItem key={todo.id} todo={todo}/>
            // <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
    )
    /*
     props를 사용하면 구성 요소 계층 구조의 여러 수준에서 상태 데이터에 액세스 할 수 있다.
     이를 '프롭 드릴링'이라고 한다.
     */
}
export default ToDoList;