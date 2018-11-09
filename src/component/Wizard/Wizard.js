import React,{Component} from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'


class Wizard extends Component(){

    render(){
    return(
       <div>
                <div className='Wizard'>
                <h1> Wizard</h1>
                <Link to='/'><button>Cancel</button> </Link>
                 <Switch>
                     <Route Component={StepOne} path= '/Wizard/StepOne'/>
                     <Route Component={StepTwo} path= '/Wizard/StepTwo'/>
                 </Switch>
                 </div>
              
        </div> 
     )

    }
    
}
export default Wizard




/*
constructor() {
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zip:0   
        }
    }
*/ 



/*import React from 'react'
import {Link} from 'react-router-dom'

export default function Wizard(){

    return(
    
        <div className='Wizard'>
            <h1>Wizard</h1>
            <Link to='/'><button>Cancel</button> </Link>

        </div>
         
     
    )
}*/