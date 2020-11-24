const FadeIn = ({time, children}) => (
    <div style ={{
        opacity:1,
        transition: time,
     }}>
    <h1>{ children }</h1>
    </div>      
    
);


export default FadeIn;

