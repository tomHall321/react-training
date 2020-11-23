let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => {

    return <ul>
        {names.map((name,index) => (
            <li key = {index}>
                {name}
            </li>
        )) }
    </ul>

};

export default People;