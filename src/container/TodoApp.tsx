import React, { useState } from 'react';

interface TodoListProps {
  title: string;
  status: string;
}

const TodoApp = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todoList, setTodoList] = useState<[TodoListProps]>([
    { title: 'Brushing', status: 'Pending' },
  ]);

  const onAddItem = () => {
    const tempItem: TodoListProps = { title: todoText, status: 'Pending' };
    setTodoList([...todoList, tempItem]);
  };

  const onRemoveItem = (index: number) => {
    const tempItem = todoList;
    tempItem.splice(index, 1);
    setTodoList([...tempItem]);
  };

  const todoListView = todoList.map((todo, index) => (
    <div className="todoItem" key={index}>
      <button type="button" onClick={() => onRemoveItem(index)}>
        X
      </button>
      {todo.title}
    </div>
  ));

  return (
    <>
      <div className="todoInputBox">
        <button type="button" onClick={onAddItem}>
          +
        </button>
        <input
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          name="TodoInput"
          id="TodoInput"
        />
      </div>

      <div className="todoListContainer">{todoListView}</div>
    </>
  );
};

export default TodoApp;
