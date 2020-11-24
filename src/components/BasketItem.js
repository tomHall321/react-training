const BasketItem = ({price, name, keyRef}) => (
    <tr key={keyRef}>
        <th scope="row">{keyRef + 1}</th>
        <td>{name}</td>
        <td>{price}</td>
    </tr>
);

export default BasketItem;