import { Component } from 'react';
import './App.css';
import { getTricks } from '../../apiCalls/apiCalls';
import TrickCards from '../TrickCards/TrickCards';

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
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickCards tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;