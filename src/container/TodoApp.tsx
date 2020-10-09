import React, { useState } from 'react';
import TodoList from '../component/Todo/TodoList';
import AddTodoItem from '../component/Todo/AddTodoItem';

const initialTodo: Todo[] = [
  {
    title: "Bathing",
    status: "inprogress"
  },
  {
    title: "Brushing",
    status: "inprogress"
  },
]

const TodoApp = () => {
  
  const [todoList, setTodoList] = useState(initialTodo);


  const onAddItem = (addItem:Todo) => {
    const TempTodoList = [...todoList, addItem];
    setTodoList(TempTodoList);
  };

  const onRemoveItem = (index: number) => {
    const tempItem = todoList;
    tempItem.splice(index, 1);
    setTodoList([...tempItem]);
  };

  

  return (
    <>
      <div className="todoInputBoxContainer">
        <AddTodoItem addNewItem={onAddItem}/>
      </div>
      <div className="todoListContainer">
        <TodoList list={todoList} onRemoveClick={onRemoveItem}/>
      </div>     
    </>
  );
};

export default TodoApp;
