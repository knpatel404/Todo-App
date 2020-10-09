import React, { useCallback, useState } from 'react';

interface props{
  addNewItem:(todoTextUpdate:Todo) =>void
}

const AddTodoItem: React.FC<props> = ({addNewItem}) => {
  const [todoText, setTodoText] = useState<string>('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const value = {title:todoText, status:'inProgress'};
    addNewItem(value);
  }
  return (
    <>
    <form  onSubmit={handleSubmit}>
      <div className="todoInputBox">
        <button type="submit">
          +
        </button>
        <input
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          name="TodoInput"
          id="TodoInput"
          placeholder="Add Todo item"
        />
        
      </div>
      </form>
    </>
  );
};

export default AddTodoItem;
