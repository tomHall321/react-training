import { Component } from "react";

class Paragraph extends Component {
    
    render(){
        const {children} = this.props;
        return (
            <p>{ children }</p>
        );
    }
}

Paragraph.defaultProps = {
    children: "Hello, world",
};

export default Paragraph;