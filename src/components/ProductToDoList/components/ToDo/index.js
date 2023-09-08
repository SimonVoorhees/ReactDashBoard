import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import ToDoItem from './ToDoItem/';
import './styles.scss';


class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "Add New Task",
            items: ["Travelagent India", "Top things to see during a holiday in Hong Kong", "Copper Canyon", "See the unmatched beauty of the Great Lakes", "Become A Travel Pro in One Easy Lesson"]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            input: event.target.value
        });
    }
    handleAdd = (event) => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.input],
            input: "Add New Task"
        });
        console.log(this.state.items);
    }
    handleRemove = (event) => {
        event.preventDefault();
        let tempItems = this.state.items;
        console.log(tempItems);
        tempItems.splice(event.currentTarget.value,1);
        console.log(tempItems);
        this.setState({
            items: tempItems
        });
        console.log(event.currentTarget.value);
    }

    render = () => {
        const itemsMap = this.state.items.map((item, index) => (
            <div className="item" key={item + index}><ToDoItem name={item} />
                <button onClick={this.handleRemove} value={index} className="removeButton">
                    <FontAwesomeIcon icon={faTrashAlt} />
                    </button></div>
        ));

        return (<div className="toDo" id="toDo">
            <h3 className="toDoTitle">To Do List</h3>
            {itemsMap}
            <form className="newTask" onSubmit={this.handleAdd}>
                <input 
                    type="text"
                    className="newTaskBox"
                    value={this.state.input}
                    onChange={this.handleInput}
                />
                <button type="submit" className="newTaskButton" >
                    <FontAwesomeIcon icon={faLocationArrow} color = "blue"/>
                </button>
            </form>
        </div>);
    }
}
export default ToDo;