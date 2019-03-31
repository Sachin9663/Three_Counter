import React,{Component} from 'react';
class Update extends Component{
    render(){
        return(
            <div className="change_val">
                <button onClick={this.props.val1}>Increse All</button>
                <button onClick={this.props.val2}>Decrese All</button>
            </div>
            
            )
    };
}

export default Update;