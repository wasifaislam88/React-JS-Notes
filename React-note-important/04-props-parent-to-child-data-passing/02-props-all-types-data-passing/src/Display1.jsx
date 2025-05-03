
import Display2 from './Display2';

const Display1 = (props) => {


    const {dataObject, dataStringVariable, dataString, dataArrVariable, dataArr, dataNumVariable, dataNum, isTrue} = props

    console.log(dataObject);



  

    return (
        <div>
            <h2>{dataObject.name}</h2>
            <Display2 data={{ ...props }} />
        </div>
    );
};

export default Display1;