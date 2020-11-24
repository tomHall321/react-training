const People = ({ names }) => (
    names ? (
        <ul>
            { names.map((name, index) => (
                <li key={ index }>{ name }</li>
            )) }
        </ul>
    ) : <p>No names</p>
);

export default People;