import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";
import FadeIn from "./FadeIn";

const Stuff = ({ square }) => (
    <>   
        <FadeIn time="500ms">
        <Header>Test, this is child of header</Header>
        <Header/>
        <Paragraph>Test, this is child of paragraph</Paragraph>
        <Paragraph/>
        <Square />
        { square ? (<Square colour="blue" />) : null }
        <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
        <Basket items={ items } />
        </FadeIn>
    </>
);

let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

Stuff.defaultProps = {
    square: true,
};

export default Stuff;