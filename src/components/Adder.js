// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6

import { Component } from "react";

class Adder extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: 0,
            numbers: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ 
            inputValue: event.currentTarget.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        this.setState({ 
            numbers: [...this.state.numbers, +this.state.inputValue] });
        //use + to convert to number
    }

    render() {
        return (
            <>
                <form>
                    <input 
                        onChange={ this.handleInputChange } 
                        value={ this.state.inputValue } />
                    <input 
                        onClick={ this.handleFormSubmit } 
                        type="submit"
                        value="Add"
                    ></input>
                </form>
                <ul>
                    { this.state.numbers.map((item, i) => (
                        <li key={ i }>{ item }</li>
                    )) }
                </ul>
                <p>Total: { this.state.numbers.reduce((a, b) => a + b, 0) }</p>
            </>
        );
    }
}

export default Adder;