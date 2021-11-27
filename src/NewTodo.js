import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { textValue: '' };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDropDownChange=this.handleDropDownChange.bind(this);
    }

    handleTextChange(event) {
        this.setState({ textValue: event.target.value });
    }

    handleDropDownChange(event){
        
        

    this.props.sorter(event.target.value);
    }
    
    render() {
     
        return (
            <header>
                <h2>My ToDo App</h2>
                <div>
                    <form onSubmit={(e) => { this.props.addEventHandler(e, this.state.textValue); this.setState({ textValue: "" }) }}>
                        <input type="text" id="add-item-input" className="add-item-input" value={this.state.textValue} onChange={this.handleTextChange} placeholder="Add a new event" required />
                        <button type="submit" className="add-event-btn" id="add-event-btn">Add</button>

                        <div className="drop-down">
                            <label htmlFor="sort">Sorted by: </label>
                            <select id="sort" name="choices" value={this.props.sortOption} onChange={this.handleDropDownChange}>
                                <option value="created-date" >Created Date</option>
                                <option value="alphabetical">Alphabetical</option>

                                <option value="completed-status">Completed Status</option>


                            </select>
                        </div>

                    </form>

                </div>

            </header>

        );
    }
}

export default NewTodo;
