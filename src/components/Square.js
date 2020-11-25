import { Component } from "react";

class Square extends Component 
{   
    constructor(props){
        
        super(props);

        this.state = {
            isGreen : true          
          };
      
          this.handleClick = this.handleClick.bind(this);
        }
      
        handleClick() {
          this.setState({
            isGreen : !this.state.isGreen
          });
        }
      
        render() {
          let {colour} = this.props;
          return (
            <div 
            onClick={this.handleClick} 
            style={{backgroundColor : this.state.isGreen ? "green" : colour, width: 200, height : 200}} />
          );
        }
      }

      Square.defaultProps = {
        colour: "blue",
    };

      
      export default Square;