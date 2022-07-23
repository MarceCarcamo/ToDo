import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import './TodoItem.css';

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
        onClick={props.onComplete}
      >
        <BsCheckCircleFill />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete" 
        onClick={props.onDelete}
      >
        <RiDeleteBin2Fill />
      </span>
    </li>
  );
}

export { TodoItem };
