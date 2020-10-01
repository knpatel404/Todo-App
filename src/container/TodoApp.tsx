import React, { useState} from 'react';

const TodoApp = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<[{title: string, status: string}]>([{title:"Brushing",status:"Pending"}]);
  
  const onClick = () => {
    const tempItem:[{title: string, status:string}] = [...todoList, {title: todoText, status:"Pending"}];
    setTodoList(tempItem);
  }

const todoItems = todoList.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index} >
      {todo.title}
    </li>
  );
return (
    <>
      <div className="todoInputBox">
        <button onClick={onClick}>+</button>
        <input type="text" onChange={(e) => setTodoText(e.target.value)} name="TodoInput" id="TodoInput"/>
      </div>

      <div className="todoListContainer">
        {todoItems}
      </div>
    </>
  );
}

export default TodoApp;