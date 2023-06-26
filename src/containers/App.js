import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll  from '../components/Scroll'
import {mascots} from '../mascots';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
        mascots: mascots,
        searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({mascots:mascots}));
        }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
       }

    render() {
        const { mascots, searchfield } = this.state;
        const filteredMascots = mascots.filter(mascot => {
            return mascot.name.toLowerCase().includes(searchfield.toLowerCase());
        }) 
     return !mascots.length ?
         <h1>Loading</h1> :
        (
         <div className="tc">
            <h1 className="f-5">NHL MASCOTS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList mascots={filteredMascots}/>
        </Scroll>
        
        </div>    
    );
     }
}

export default App;