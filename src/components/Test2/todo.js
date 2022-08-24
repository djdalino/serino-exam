import React, {useState, useReducer} from 'react'


const initialState = [
  {
    todo: 'eat'
  },
  {
    todo: 'sleep'
  },
  {
    todo: 'code'
  }
]


const todosReducer = (state, action) => { 
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { todo: action.text }]
    case 'REMOVE_TODO':
      return state.filter((t, idx) => idx !== action.index)
    default:
      return state
  }
 };
 
 const TodoList = () => {
  
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  const [text, setText] = useState('')
  

  const handleAdd = () =>{
    dispatch({type: 'ADD_TODO', text})
    setText("")
  }
  const handleRemove = (id, index) =>{
    dispatch({type: 'REMOVE_TODO', index})
  }

  return (
    <div>
      <ul className = "todo-list">
        {todos.map((todo, index) => (
          <li className = "todo-items" key={index}><div >{todo.todo}<button className="todo-items-btn" onClick ={() => handleRemove(todo, index)}>Remove todo</button></div></li>
        ))}
      </ul>
      <input type="text" value={text} onChange={(e) =>setText(e.target.value)}/>
      <button onClick={() => handleAdd()}>Add todo</button>
    </div>
  );
 };

 export default TodoList