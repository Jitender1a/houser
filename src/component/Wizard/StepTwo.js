import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StepTwo extends Component{
    constructor(){
        super();
        this.state={
            img:''
        }
    }
    handleImgChange(value){
        this.setState({img:value})
    }

    render(){
        return(
                <div>
                    <p>Image URL</p>
                    <input value={this.state.img} onChange={(e)=>this.handleImgChange(e.target.value)}/>
                    <Link to ='/Wizard/StepThree'><button className='Step Three'>Step Three</button></Link>
                </div>
        );
    }
}
export default StepTwo