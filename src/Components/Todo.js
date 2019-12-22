import React from "react";

function Todo(props) {
        
    return (
        <div>
            <label>{props.item.title}</label>
            <input onChange={(evet) => props.Click(props.item.id)} type="checkbox" checked={props.item.checked}></input>
        </div>
    )
}

export default Todo;