import './Pagination.css'

// just an array of numbers
let numbers = [1, 2, 3, 4];

const Pagination = () => (
  <ul className="a">
    { numbers.map((value, index) => (
      <li className="b" key={ index }>
        <a className="c" href={ "" + value }>{ value }</a>
      </li>
    ))}
  </ul>
);

export default Pagination;