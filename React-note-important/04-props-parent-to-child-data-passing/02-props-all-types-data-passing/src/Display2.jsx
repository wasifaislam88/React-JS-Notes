

const Display2 = ({data}) => {
    console.log(data);
    
    const {dataObject, dataNum, isTrue} = data

    
    console.log( dataObject.name,  dataNum , isTrue);
    //output: {name: 'John', age: 100, skill: 'React'} 200 true
        
    return (
        <div> 
            <h2>{dataObject.name}</h2>
            <h2>{dataNum}</h2>
            <h2>{isTrue}</h2>
        </div>
    );
};

export default Display2;