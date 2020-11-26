import { Component } from "react";

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celsius: "",
            fahrenheit: "",
        };

        this.celciusChange = this.celciusChange.bind(this);
        this.fahrenheitChange = this.fahrenheitChange.bind(this);
    }

    celciusChange(event) {
        let value = event.currentTarget.value;
        // The currentTarget event property returns the element whose event listeners triggered the event.
        this.setState({
            celsius: value,
            fahrenheit: (value * 1.8 + 32),
        });
    }

    fahrenheitChange(event) {
        let value = event.currentTarget.value;
        this.setState({
            fahrenheit: value,
            celsius: ((value - 32) / 1.8),
        });
    }

    render() {
        return (
            <>
                <div>
                    <label>Celsius</label>
                    <input 
                        type="number" 
                        onChange={ this.celciusChange } 
                        value={ this.state.celsius } />
                </div>
                <div>
                    <label>Fahrenheit</label>
                    <input 
                        type="number"
                        onChange={ this.fahrenheitChange } 
                        value={ this.state.fahrenheit } />
                </div>
            </>
        );
    }
}

export default TempConverter;