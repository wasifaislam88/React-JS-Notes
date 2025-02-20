const Watch = ({watch}) => {

    const {name, price, id} = watch;

    return (
        <div>
            <h2>Watch ID: {id}</h2>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Watch;