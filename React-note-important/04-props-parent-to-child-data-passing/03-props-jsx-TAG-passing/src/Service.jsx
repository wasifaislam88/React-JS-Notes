
//NOTE: children is a reserved prop 
//NOTE: headerrr evabe variable use koreo props korte pari
//NOTE: ar normal prop to achei....

//NOTE:
// const Service = ({ children, num1, arr, header }) => {
//     // Without ...props, you have to destructure everything manually.
// };
const Service = ({children, headerrr, ...props}) => {
    console.log(props); //output: {num1: 10, arr: Array(5)}
    
    console.log(props.num1, props.arr, props.header); //output: (5) [1, 2, 3, 4, 5]
 
    
    return (
        <div>
            <div>{children}</div>
            <div>{headerrr}</div>
        </div>
    );
};

export default Service;

//UI oupput:::::
// Children h2
// Children h3
// Children p
// This is passed via a custom prop