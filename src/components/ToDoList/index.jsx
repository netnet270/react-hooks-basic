import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

ToDoList.defaultProps = {
  todos: [],
  onTodoClick: null
}

function ToDoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className='todo'>
      {
        todos.map(item => {
          return (
            <li className='todo__item' key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
          )
        })
      }
    </ul>
  );
}

export default ToDoList;
