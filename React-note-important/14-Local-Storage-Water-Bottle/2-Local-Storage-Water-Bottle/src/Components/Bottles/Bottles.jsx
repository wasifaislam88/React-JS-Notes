import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCart, removeFromLS } from "../../../Utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    //data load korte parle array er moddhe thakbe. load na korte parle empty array hobe. so default man empty array
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])



    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id == id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log('saved cart',savedCart);
            setCart(savedCart)
            
        }
        
    }, [bottles])



    const handleAddToCart = (bottle) => {
        // console.log('bottle going to added');
        // console.log(bottle);

        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = (id) => {
        //visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        //remove from local storage
        removeFromLS(id);//utilitiex/localstorage.js file theke cal korechi
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>



        </div>
    );
};

export default Bottles;