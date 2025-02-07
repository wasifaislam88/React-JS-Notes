import PropTypes from 'prop-types';
import './Bottle.css'


const Bottle = ({bottle, handleAddToCart}) => {
    console.log(bottle);
    const {id, name, category, img, price} = bottle;
    return (
        <div className="bottle-container">
            <h3>Category: {category}</h3>
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <img src={img}></img>
            <h3>price: ${price}</h3>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
            {/* <h3>Quantity: {quantity}</h3>
            <h3>Ratings: {ratings}</h3>
            <h3>Seller: {seller}</h3>
            <h3>Stock: {stock}</h3> */}
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;



// category: "Bottle"
// id: "30698483-f7aa-49ba-9de9-9070f64dc263"
// img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg"
// name: "Steel Bottle 600 ML"
// price: 23
// quantity: 0
// ratings: 5
// ratingsCount: 35
// seller: "Addidas"
// shipping: 5
// stock: 11