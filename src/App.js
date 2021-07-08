import { useState } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList';

function App() {

  const initTodoList = [
    { id: '1', title: 'React-basicccc' },
    { id: '2', title: 'React-Hooks' },
    { id: '3', title: 'Redux-Toolkit' }
  ];

  const [TodoList, setTodoList] = useState(initTodoList);

  function handleTodoClick(item) {
    const index = TodoList.findIndex(x => x.id === item.id)
    const newToDoList = [...TodoList];
    newToDoList.splice(index, 1);
    setTodoList(newToDoList);
  }

  return (
    <div className="App">
      <ToDoList todos={TodoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
