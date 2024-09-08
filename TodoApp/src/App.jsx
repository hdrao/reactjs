import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee, faImage, faTrashCanArrowUp,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

function App() {
  const [input, setinput] = useState('');
  const [todos, settodos] = useState([]);

  const handleinput = () => {
    if (input !== '') {
      settodos([...todos, { id: Date.now(), text: input, comleted:false}]);
      setinput('');
    }
  }

  const handleremove = (id) => {
    settodos(todos.filter((todo) => todo.id !== id))
  }

  const handlecomplete = (id) => {
    settodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, comleted: !todo.comleted }
      }
      return todo;
    }))
  }

  let handlecompleteuppercase = (id) => {
    settodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, text: todo.text.toUpperCase() }
        }else {
          return todo;
        }
      })
    })
  }


  return (
    <>
      <div className="todoApp">
        <div className="components">
          <h1>Todo List</h1>
          <div className="todocomponents">
            <input type="text" placeholder="Enter your task"
              value={input}
              onChange={(e)=>setinput(e.target.value)}
            />
            <button onClick={() => handleinput()}>Add</button>
          </div>
          <div className="todolist">
            <ul>
              {todos.map((todo) => {
                return (
                  <li  key={todo.id} className={todo.comleted ? 'completed' : ''}>
                  <h3 >{todo.text}</h3>
                  <button onClick={()=> handleremove(todo.id)}><FontAwesomeIcon className='text-red-500 font-extrabold' icon={faTrashCanArrowUp} /></button>
                  <button onClick={() => {handlecomplete(todo.id)}}><FontAwesomeIcon className='text-red-500 font-extrabold' icon={faCheck} /></button>
                  <button onClick={ () => {handlecompleteuppercase(todo.id)}}><FontAwesomeIcon className='text-red-500 font-extrabold'   icon={faArrowUp}/></button>
                </li>
                )
              })}

            </ul>
          </div>
        </div>
      </div>   
    </>
  );
}

export default App;