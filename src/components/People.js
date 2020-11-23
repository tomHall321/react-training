let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => {

    return <ul className = "names-list">
    { names.map((name,index) => (
    <li className = "names-list-name" key = { index }>
    { name }
    </li>
    )) }
    </ul>

};

export default People;