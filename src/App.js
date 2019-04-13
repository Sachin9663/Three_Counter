import React, { Component } from 'react';
import Main from './componant/main';
import Header from './componant/Header/header';
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
        })
    }

    decreaseAll=()=>{
        this.setState({
            action:"decrese",
        })
    }
    render() {
        let{action,counter}=this.state;

        return (
            <div className="App">
                <Header/>
                    <Main action={action} counter={counter}/>
                    <Main action={action} counter={counter}/>
                    <Main action={action} counter={counter}/>
                    <button className='main' onClick={this.increaseAll}>Increse All</button>
                    <button className='main' onClick={this.decreaseAll}>Decrese All</button>
            </div>
        );
    }
}

export default App;
