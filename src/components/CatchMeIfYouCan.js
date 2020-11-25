import { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            top: this.state.top + this.props.jump,
        });
    }

    render() {
        return (
            <button
                style={{ position: "relative", top: this.state.top }}
                onClick={ this.handleClick }
            >
                Catch Me If You Can!
            </button>
        );
    }
}

export default CatchMeIfYouCan;