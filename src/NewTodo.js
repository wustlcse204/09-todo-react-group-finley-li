import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
    render() {
        return (
            <header>
            <h2>My ToDo App</h2>
            <div>
                <form>
                    <input type="text" id="add-item-input" className="add-item-input" placeholder="Add a new event" required/>
                    <button type ="submit" className="add-event-btn" id="add-event-btn">Add</button>

                </form>
                
            </div>

        </header>

        );
      }
}

export default NewTodo;
