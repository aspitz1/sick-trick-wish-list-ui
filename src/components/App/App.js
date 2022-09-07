import { Component } from 'react';
import './App.css';
import { getTricks, postTrick } from '../../apiCalls/apiCalls';
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
    this.setState({ tricks: [...this.state.tricks, { ...trick, id: Date.now() }] });
    postTrick(trick)
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <TrickCards tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;