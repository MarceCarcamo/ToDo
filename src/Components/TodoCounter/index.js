import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <div className='TodoCounter'>
      <h2 className='TodoCounter-user'>¡Hi Marcelo!</h2>
      <p className='TodoCounter-tasks'>Completed {completedTodos} of {totalTodos} Tasks</p>
    </div>
  );
}

export { TodoCounter };
