import './Sunglass.css';
import Watch from '../Watch/Watch';
// import add from '../../Utils/calculate';
import { add, multiply, divideTheFirstNumByTheSecond as divide } from '../../Utils/calculate';



const Sunglass = () => {
    const first = 5;
    const second = 20;
    const sum = add(first, second);
    const multi = multiply(first, second);
    const divition = divide(first, second);
    console.log(sum, multi, divition);
    return (
        <div className='sunglasses'>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;