import { Component } from "react";

class Length extends Component 
{   
    constructor(props){
        
        super(props);

        this.state = {
            input: "",
        };
    
        this.handleInput = this.handleInput.bind(this);
    };

    handleInput(event) {
        this.setState({ input: event.currentTarget.value });
    }

    render() {
        let { input } = this.state;
        return (
            <form>
                <input
                onChange={this.handleInput}
                value={input}
                />
                <p>Length:{input.length}</p>
            </form>
        );
    }
}

export default Length;