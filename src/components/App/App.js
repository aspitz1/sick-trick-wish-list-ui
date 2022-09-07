import { Component } from 'react';
import './App.css';
import { getTricks, postTrick, deleteTrick } from '../../apiCalls/apiCalls';
import TrickCards from '../TrickCards/TrickCards';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    getTricks()
      .then(response => response.json())
      .then(data  => this.setState({ tricks: data }))
      .catch(err => console.log(err))
  }

  addTrick = (trick) => {
    postTrick(trick)
      .then(() => {
        getTricks()
        .then(response => response.json())
        .then(data  => this.setState({ tricks: data }))
        .catch(err => console.log(err))
      })
  }

  deleteTrick = (id) => {
    deleteTrick(id) 
    .then(() => {
      getTricks()
      .then(response => response.json())
      .then(data  => this.setState({ tricks: data }))
      .catch(err => console.log(err))
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <TrickCards tricks={this.state.tricks} deleteTrick={this.deleteTrick}/>
      </div>
    );
  }
}

export default App;