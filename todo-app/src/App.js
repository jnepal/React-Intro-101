import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Motion, spring, presets } from 'react-motion';

import './App.css';

const uuid = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddTodoChange = this.handleAddTodoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.handleRemove = this.handleRemove.bind(this);


    this.state = {
      newTodo: '',
      todos: [
        {
          id: uuid(),
          text: 'Buy milk'
        },
        {
          id: uuid(),
          text: 'Return library book'
        },
        {
          id: uuid(),
          text: 'Go to post office'
        },
        {
          id: uuid(),
          text: 'Think about life'
        },
        {
          id: uuid(),
          text: 'Lie down'
        }
      ]
    };
  }

  getTodos() {
    return this.state.todos.map((todo, index) => {
      return (
        <Motion defaultStyle={{ left: -1000 }} style={{ left: spring(0, presets.wobbly) }} key={todo.id}>
          {interpolatingStyle => (
            <li
              className="todo-list-item"
              key={todo.id}
              style={interpolatingStyle}
            >
              <span>{todo.text}</span>
              <input
                className="todo-list-checkbox"
                onChange={() => this.handleRemove(todo.id)}
                type="checkbox"
              />
            </li>
          )}
        </Motion>
      );
    });
  }

  handleAddTodoChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  handleSubmit(e) {

    e.preventDefault();

    let todos = this.state.todos;

    todos.push({
      id: uuid(),
      text: this.state.newTodo
    });

    this.setState({
      newTodo: '',
      todos
    });

  }

  handleRemove(id) {
    let newItems = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newItems
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="todo-heading">To-dos</h1>
        <CSSTransitionGroup
          component="ul"
          className="todo-list"
          transitionName="new-todo"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getTodos()}
        </CSSTransitionGroup>
        <div className="todo-controls">
          <form onSubmit={this.handleSubmit}>
            <input
              className="todo-controls-input"
              onChange={this.handleAddTodoChange}
              placeholder="Add a todo"
              type="text"
              value={this.state.newTodo}
            />
          </form>
          <button className="todo-controls-button">Add</button>
        </div>
      </div>
    );
  }
}

export default App;
