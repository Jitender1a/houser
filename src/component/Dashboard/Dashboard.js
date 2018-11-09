
import React,{Component} from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component(){
        constructor(){
            super()
            this.state={
                houses:[]
            };
            this.handleDeleteItem=this.handleDeleteItem.bind(this);
        }
        ComponentDidMount(){
            axios.get('/api/houses').then(response=>{
                this.setState({houses:response.data})
            })
        }

        handleDeleteItem(id){
            axios.delete(`/api/house/${id}`).then(response=>{
                this.setState({houses:response.data})
            });
        }

     

    render(){ 
        
        return (
        <div>
            <div className="component bckgrd">Dashboard</div>
            <Link to='/Wizard'> <button>Add New Property</button> </Link>
            <House delete = {this.handleDeleteItem}/>
        </div>
    );
    }
} 
export default Dashboard



/*import React from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'

export default function Dashboard(){
    return(
        <div className='Dashboard'>
        <h1>Dashboard</h1>
        <Link to='/Wizard'> <button>Add New Property</button> </Link>
    <House/>
    </div>
   )
    
}
*/
