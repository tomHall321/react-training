import Headerz from "./Headerz";
import Pagination from "./Pagination";
import Items from "./Items";
import Main from "./Main";
import React from "react";
import './Main-page.css'

const Stuff = () => {
    return (
      <React.Fragment>
      <div className="bigDiv">
        <div>  
            <Headerz />
        </div>
        <div>
            <Main />
            <Items />
            <Pagination />
        </div>
      </div>  
      </React.Fragment>

    );
  };
  
  export default Stuff;