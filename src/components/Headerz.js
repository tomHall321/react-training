import cat from "../images/cat-dance.gif";

const Headerz = () => {
    return (
        <>
            <h1>My App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior.</p>
            <img className="img-thumbnail" alt="A cat" src={cat}/>
        </>
    )
}

export default Headerz;