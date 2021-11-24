import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import Todo from './Todo';
class App extends Component {
  render() {
    return (

      <div id="main-section" className="main-section">


        <NewTodo />

        {/* TODO: replace with new wrapper class later */}
        <div className="to-do-list-container" id="to-do-list-container">
          <ul className="to-do-list" id="to-do-list">

            <Todo />
          </ul>

        </div>

      </div>












    );
  }
}

export default App;
