


import './Sunglass.css'// same folder er moddhe import
import Watch from '../Watch/Watch'; // ak level upore -> Watch Folder -> Watch.jsx // .jsx na dileo hoy

// Single default import
import add from '../../Utils/calculateSingle'; //(add function re call korechi) // 2 level upore -> Utils Folder -> calculateSingle.js .jsx na dileo hoy




// import { divide} from '../../Utils/calculateMultiple';
// import { subtract} from '../../Utils/calculateMultiple';
// import { multiply} from '../../Utils/calculateMultiple';
//OR.OR.OR.OR.OR.OR
//import all-------->> import * as calMultiple from '../../Utils/calculateMultiple';
//use--------------->> console.log(math.divide(5, 3));       // Output: 8
//use--------------->> console.log(math.subtract(5, 3)); // Output: 2
// Multiple import
import { divide, subtract, multiply } from '../../Utils/calculateMultiple'; //(divide, substract, multiply function re call korechi) // 2 level upore -> Utils Folder -> calculateSingle.js .jsx na dileo hoy






const Sunglass = () => {

    const first = 55
    const second = 66


    // add function call from calculateSingle.js
    const sumResult = add(first, second); // 2 level upore Utils folder er moddhe calculateSingle.jsx file e add function re call korechi...
    console.log('add: ',sumResult);//121


    // divide, subtract, multiply function call from calculateMultiple.jx
    const divideResult = divide(first, second)
    console.log('divide: ', divideResult);
    const subtractResult = subtract(first, second)
    console.log('subtract: ', subtractResult);
    const multiplyResult = multiply(first, second)
    console.log('multiply: ', multiplyResult);
    
    

    return (
        <div>
            <h2>This is Sunglass</h2>

            <h3>Sum: {sumResult}</h3>
            {/* UI output-> Sum: 212 */}

            <h3>Divide: {divideResult}</h3>
            {/* UI output-> Divide: 0.8333333333333334 */}

            <h3>Subtract: {subtractResult}</h3>
            {/* UI output-> Subtract: -11 */}

            <h3>Multiply: {multiplyResult}</h3>
            {/* UI output-> Multiply: 3300 */}

            <Watch></Watch>
        </div>
    );
};

export default Sunglass;