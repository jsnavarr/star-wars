import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {getAllStarShips} from '../../services/sw-api';
import StarShips from '../../components/StarShips/StarShips';
import StarshipPage from '../../components/StarshipPage/StarshipPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starShips: null,
      isLoading: true
    };  
  }

  async componentDidMount() {
    var endpoint = 'https://swapi.co/api/starships/';
    var allStarShips=[];
    do{
      const starShips = await getAllStarShips(endpoint);
      console.log('all ', starShips);
      endpoint= starShips.next;
      console.log('next ', endpoint);
      allStarShips.push(starShips);
    }while(endpoint);
    this.setState({
      starShips: allStarShips,
      isLoading: false
    });
  }

  getStarship = (idx) =>{
    return this.state.starShips.results[idx];

  }

  render() {
    console.log('isloading ', this.state.isLoading, ' starShips ', this.state.starShips);
    if(!this.state.isLoading && this.state.starShips){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() =>  
          <div className="App">
            <header className="App-header">
                <StarShips starShips={this.state.starShips}/>
            </header>
          </div>
        }/>
        <Route path='/starship/:id' render={props => 
          <header className="App-header">
            <StarshipPage 
              {...props}
            />
          </header>
        }/> 
      </Switch>
      </BrowserRouter>
    );
    }
    else{
      return (
      <div className="App">
        <header className="App-header">
            <h1>Waiting for data to load...</h1>
        </header>
      </div>
      );
    }
  }
}

export default App;
