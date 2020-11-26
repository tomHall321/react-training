// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { Component } from "react";

class List extends Component 
{
    constructor() {
        super();

        this.state = {
            value: "",
            items: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        
    }

    handleInputChange(event) {
        this.setState({
          value: event.currentTarget.value,
        });
      }

    handleFormSubmit(event) {
        event.preventDefault();
        this.setState({
            value: "",
            items: [this.state.value, ...this.state.items],
            // Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array. 
          });
    }

    render() {
        return (
          <>
            <form onSubmit={this.handleFormSubmit}>
              <input
                onChange={this.handleInputChange}
                value={this.state.value}
              />
              <input 
                type="submit"
                value="Add to List" 
              ></input>
              {/* <button>Add to list</button> */}
            </form>
            <ul>
              {this.state.items.map((value, index) => (
                <li key = {index}>{value}</li>
                //turn array into list items
              ))}
            </ul>
          </>
        );
      }
    }



export default List;