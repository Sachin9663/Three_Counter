import React ,{ Component } from 'react';
import './main.css'

class Main extends Component{
   state={
       action:this.props.action,
       counter:this.props.counter
    }
    increase=()=>{
        this.setState({
          counter:this.state.counter+1});
      }
    
    decrease=()=>{
        this.setState({
          counter:this.state.counter-1
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.action === "increse"){
            this.setState({
                counter:this.state.counter+1
            })
        }
        else{
            this.setState({
                counter:this.state.counter-1
            })
        }

    }

    render(){
        return(
                <div>
                    <button onClick={this.increase}>+</button>
                    <input type="text" value={this.state.counter}/>
                    <button onClick={this.decrease}>-</button>
                </div>
            )
    }
}   

export default Main;
