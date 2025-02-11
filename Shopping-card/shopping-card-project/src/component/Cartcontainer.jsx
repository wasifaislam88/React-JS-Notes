
import Cart from './Cart/Cart';
import About from './About/About';

const Cartcontainer = ({handleIsActiveState,isActive,selectedProducts, handleDelete }) => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>cartcontainer</h2>
           <div className='flex justify-between'>
            <button onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart?"btn bg-blue-600":"btn"}`}>Cart</button>
            <button onClick={()=>handleIsActiveState("about")} className={`${isActive.cart?'btn':'btn bg-blue-600'}`}>About</button>
        </div>
{ isActive.cart?<Cart handleDelete ={ handleDelete } selectedProducts={selectedProducts}></Cart>:<About></About>
  }
        </div>
    );
};

export default Cartcontainer;