import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div>
        <li className="unchecked">Item1
        <span className="close-btn"></span>
        </li>
       

      </div>

    );
  }
}

export default Todo;
