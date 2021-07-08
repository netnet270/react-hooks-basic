import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */

ToDoForm.propTypes = {
  onSubmit: PropTypes.func
};

ToDoForm.defaultProps = {
  onSubmit: null
}

function ToDoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function handleValueChange(event) {
    setValue(event.target.value)
  }

  function handleSubmit(e) {
    // Prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    onSubmit(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleValueChange} />
    </form>
  );
}

export default ToDoForm;