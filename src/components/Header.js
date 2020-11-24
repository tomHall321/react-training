const Header = ({ children }) => (
    <h1>{ children }</h1>
);

Header.defaultProps = {
    children: "Apple a day",
};

export default Header;