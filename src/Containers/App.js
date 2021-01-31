import React,{Component} from'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{return Response.json();})
        // .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }
    onsearchchange=(event)=>{
        this.setState({searchfield:event.target.value})
        
    
    }

    render(){
        const filteredrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        }

        )
        if (this.state.robots.length===0){
            return <h1>Loading...</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="tc f1">RoboFriends</h1>
                    <Searchbox searchchange={this.onsearchchange} />
                    <Scroll>
                    <Cardlist robots={filteredrobots}/>
                    </Scroll>
                    
                </div>
            );
        }
        

        }
    
}
export default App;