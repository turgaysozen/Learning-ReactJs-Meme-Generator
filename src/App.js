import React, { Component } from "react";

class App extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : true,
        }
    }
    render(){
        
    return (
        <div>
           <h1>You are curently {this.state.isLoggedIn ? 'In' : 'Out'}</h1>
        </div>
    )
    }
}

export default App;
