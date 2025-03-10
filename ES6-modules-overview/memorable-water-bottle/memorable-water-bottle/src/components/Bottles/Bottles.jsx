import { useEffect, useState } from "react";
import './Bottles.css'
import Bottle from "../Bottle/Bottle";
import { addToLs, getStoredCart, removeFromLs } from "../../utilities/localStorage";
import Cart from "../../Cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage
    useEffect(() =>{
        console.log('called the useEffect', bottles.length);
        // const storeCart = getStoredCart();
        // console.log(storeCart);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLs(id);
    }

    return (
    <div>
        <h2>Bottles connected: {bottles.length}</h2>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

        <div className="bottles-container">
            {
                bottles.map(bottle => 
                <Bottle key={bottle.id} 
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
        </div>
    </div>
    );
};

export default Bottles;