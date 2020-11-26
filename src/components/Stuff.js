import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";
import FadeIn from "./FadeIn";
import Clicked from "./Clicked"
import ToggleText from "./ToggleText"
import Counter from "./Counter"
import StepCounter from "./StepCounter"
import CatchMeIfYouCan from "./CatchMeIfYouCan"
import RollCall from "./RollCall"
import Colours from "./Colours"
import Die from "./Die"
import LameGame from "./LameGame"
import GodCounter from "./GodCounter";
import TwoCounters from "./TwoCounters";
import Length from "./Length";
import PasswordStrength from "./PasswordStrength";
import TempConverter from "./TempConverter";
import List from "./List";
import Adder from "./Adder";

const Stuff = ({ square }) => (
    <>   
        <Adder/>
        <List/>
        <TempConverter/>
        <PasswordStrength/>
        <Length/>
        <TwoCounters/>
        <GodCounter/>
        <LameGame aim={ 10 }/>
        <Colours colours={ [
            "#C14412",
            "#EBB31A",
            "#8F5318",
            "#009EAD",
            "#395967",
        ]}></Colours>
        <Die sides={ 6 }></Die>
        <CatchMeIfYouCan jump={ 100 }></CatchMeIfYouCan>
        <RollCall names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
        <Clicked/>
        <ToggleText/>
        <Counter initial={ 50 } max={ 100 } />
        <StepCounter max={ 100 } step={ 5 } />
        <FadeIn time="500ms">
        <Header>Test, this is child of header</Header>
        <Header/>
        <Paragraph>Test, this is child of paragraph</Paragraph>
        <Paragraph/>
        <Square colour="hotpink"/>
        {/* { square ? (<Square colour="blue" />) : null } */}
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

// Stuff.defaultProps = {
//     square: true,
// };

export default Stuff;