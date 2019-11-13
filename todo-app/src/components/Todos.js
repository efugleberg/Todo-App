import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  
  render() {
    return this.props.bananas.map(todo => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  bananas: PropTypes.array.isRequired
};

export default Todos;
