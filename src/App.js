import React, { Component } from "react";
import Todo from "../src/Components/Todo"
import TodoList from "./productsList";

// class App extends Component {

// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            todo: TodoList,
        }
        this.Click = this.Click.bind(this);
    }
    Click(id) {
        this.setState(prevState => {
            const Updatetodo = prevState.todo.map(todo => {
                if (todo.id === id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            })
            return prevState.todo = Updatetodo;
        });
    }
    render() {
        const todoItems = this.state.todo.map(item => <Todo key={item.id} item={item} Click={this.Click} />);
        return (
            <div>
                {todoItems}
            </div >
        )
    }
}
export default App;
