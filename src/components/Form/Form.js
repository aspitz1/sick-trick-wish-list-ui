import { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleState = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTrick(this.state);
    }

    render() {
        return (
            <form>
                <select onChange={(event) => this.handleState(event)} name='stance'>
                    <option value=''>--Pick a Stance--</option>
                    <option value='regular'>Regular</option>
                    <option value='switch'>Switch</option>
                </select>
                <input onChange={(event) => this.handleState(event)} name='name' type='text' placeholder='Name of Trick'/>
                <select onChange={(event) => this.handleState(event)} name='obstacle'>
                    <option value=''>--Pick an Obstacle--</option>
                    <option value='flatground'>Flatground</option>
                    <option value='ledge'>Ledge</option>
                    <option value='rail'>Rail</option>
                    <option value='stairs'>Stairs</option>
                    <option value='pool'>Pool</option>
                </select>
                <input onChange={(event) => this.handleState(event)} name='tutorial' type='text' placeholder='Link to Tutorial'/>
                <button onClick={(event) => this.handleSubmit(event)}>SEND IT</button>
            </form>
        )
    }
}

export default Form;