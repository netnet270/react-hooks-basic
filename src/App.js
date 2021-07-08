import { useState } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {

  const initTodoList = [
    { id: '1', title: 'ReactJs 😊' },
    { id: '2', title: 'VueJs 🎉' },
    { id: '3', title: 'AngularJs ❤️' }
  ];

  const [TodoList, setTodoList] = useState(initTodoList);

  function handleTodoClick(todo) {
    const index = TodoList.findIndex(x => x.id === todo.id)
    const newToDoList = [...TodoList];
    newToDoList.splice(index, 1);
    setTodoList(newToDoList);
  }

  function handleFormSubmit(formValues) {
    console.log(formValues);
    const newToList = [...TodoList];
    newToList.push({
      id: newToList.length + 1, // demo
      title: formValues
    })
    setTodoList(newToList)
  }

  return (
    <div className="App">
      <ToDoForm onSubmit={handleFormSubmit} />
      <ToDoList todos={TodoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
