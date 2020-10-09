import React, { useCallback } from 'react';

interface Props{
  list:Todo[],
  onRemoveClick: (index:number)=>void;
}

const TodoList: React.FC<Props> = ({list, onRemoveClick}) => {
  
  const onClickRemove = useCallback((index:number) => {
    onRemoveClick(index);
  },[list]);

  const todoListView = list.map((todo, index) => (
    <div className="todoItem" key={index}>
      <button type="button" onClick={() => onClickRemove(index)}>
        X
      </button>
      {todo.title}
    </div>
  ));

  return (
    <>
     {todoListView}
    </>
  );
};

export default TodoList;
