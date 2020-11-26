import { Component } from "react";

class PasswordStrength extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) 
    {
        console.log(event) //this will return an object 
        this.setState({ value: event.currentTarget.value });
        // The currentTarget event property returns the element whose event listeners triggered the event.
        // currentTarget is input field
    }

    inputColour() 
    {
        let length = this.state.value.length;

        if (length === 0){
            return {background: ""};
        }
        else if (length < 9) {
            return {background: "red"}; 
        } 
        else if (length < 16) {
            return {background: "orange"};
        }
        return {background: "green"};
    }

    render() 
    {

        let { value } = this.state;
        let style = this.inputColour();
        //onChange triggers a change which causes a re-render, means I can update the style with the inputMethod each time a letter is typed
        return (
            <div>
                <input
                    style = { style }
                    onChange = { this.handleChange }
                    value = { value }
                />
            </div>
        );
    }
}

export default PasswordStrength;