import { Component } from "react";

class Header extends Component {

    render(){
        const {children} = this.props;
        return (
            <h1>{ children }</h1>
        );
    }
}

Header.defaultProps = {
    children: "Apple a day",
};

export default Header;