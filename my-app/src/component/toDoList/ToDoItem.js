import React from 'react';

function ToDoItem(props){
    return (
        <li>{props.todo.title}</li>
    );
}
export default ToDoItem;