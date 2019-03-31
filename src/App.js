import React, { Component } from 'react';
import Main from './main';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0,
            action:" "
        }
    }
    increaseAll=()=>{
        this.setState({
            action:"increse",
            counter:this.state.counter+1
        })
    }

    decreaseAll=()=>{
        this.setState({
            action:"decrese",
            counter:this.state.counter-1
        })
    }
    render() {
        let{action,counter}=this.state;

        return (
            <div className="App">
                    <Main action={action} counter={counter}/>
                    <Main action={action} counter={counter}/>
                    <Main action={action} counter={counter}/>
                    <button onClick={this.increaseAll}>Increse All</button>
                    <button onClick={this.decreaseAll}>Decrese All</button>
            </div>
        );
    }
}

export default App;
