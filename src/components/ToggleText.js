import { Component } from "react";

class ToggleText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initial: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            initial: !this.state.initial,
        });
    }

    render() {
        let { initial, alternate } = this.props;

        return (
        <>
            <p >
                { this.state.initial ? initial : alternate }
            </p>
            <button 
                onClick={ this.handleClick }>
                Hello or World
            </button>
        </>
        );
    }
}

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World",
};

export default ToggleText;