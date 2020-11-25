import { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
          index:
            this.state.index < this.props.names.length - 1
              ? this.state.index + 1
              : 0,
        });
      }

    render() {

        return (
            <>
                <p>{ this.props.names[this.state.index] }</p>
                <button onClick={ this.handleClick }>Next</button>
            </>
        );
    }
}

export default RollCall;