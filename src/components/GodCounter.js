import { Component } from 'react';

class GodCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        let {count} = this.state;
        return (
            <p>{ count }</p>
        );
    }
}

export default GodCounter;