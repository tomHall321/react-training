import './Items.css'

// just an array of numbers
let numbers = ["Item 1", "Item 2", "Item 3", "Item 4"];

const Items = () => (
  <ul className="items">
    { numbers.map((value, index) => (
      <li className="b" key={ index }>
        <a className="item" href={ "" + value }>{ value }</a>
      </li>
    ))}
  </ul>
);

export default Items;