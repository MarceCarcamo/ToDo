import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoForm } from '../Components/TodoForm';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return (
      <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>error</p>}
        {loading && <p>cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>crea tu primer todo</p>}
   
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
           ))}
      </TodoList> 

      {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      </React.Fragment>
      );
}

export { AppUI };