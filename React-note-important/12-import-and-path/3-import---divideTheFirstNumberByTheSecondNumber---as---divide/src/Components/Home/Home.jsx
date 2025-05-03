import {add, divideTheFirstNumberByTheSecondNumber as divide } from "../../Utils/calculate";



const Home = () => {

    
    const first = 100
    const second = 20

    const divideResult = divide(first, second)
    console.log('divide: ', divideResult);

    


    return (


        <div>
            <h3>Divide: {divideResult}</h3>
        </div>
    );
};

export default Home;