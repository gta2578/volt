import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {

  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      <label>
        {todo ?
          <input type="checkbox" defaultChecked={todo.completed}/>
          :
          ''
        }
        <span
          className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
          )}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.content}
        </span>
      </label>
    </li>
  );
}


export default connect(
  null,
  { toggleTodo }
)(Todo);