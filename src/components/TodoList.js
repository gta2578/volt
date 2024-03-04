import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByTodoFilter } from "../redux/selectors";


const TodoList = ({ todos }) => {

  return (
    <>
      {
        todos.length !== 0 ? <div className='count-wrapper'><span className='list-items-count'>list items count: </span><span className='count-value'>{todos.length}</span></div>
        : ''
      }
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
          : "No todos here!"}
      </ul>
    </>
  );
}

const mapStateToProps = state => {
  const { todoFilter } = state;
  const todos = getTodosByTodoFilter(state, todoFilter);

  return { todos };
};


export default connect(mapStateToProps)(TodoList);