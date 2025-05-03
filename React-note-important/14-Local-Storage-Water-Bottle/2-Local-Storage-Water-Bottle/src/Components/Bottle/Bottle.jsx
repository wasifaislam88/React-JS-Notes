import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    
    return (
        <div className='bottle'>
            <h3>Bottle Name: {bottle.name}</h3>
            <img src={bottle.img} alt="Bottle" />
            <p>Price: $  {bottle.price}</p>
            <p>Stock: {bottle.stock}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;