import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

import './todoStyles.css';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    if (this.state.input.length <= 100) {
      this.props.addTodo(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <div className="input-wrapper">
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder='Enter text (max - 100 characters)'
        />
        <button className="add-todo-btn" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);