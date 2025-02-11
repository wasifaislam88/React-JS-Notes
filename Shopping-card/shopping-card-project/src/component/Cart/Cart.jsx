const Cart = ({selectedProducts, handleDelete }) => {
    return (
        <div>
          {selectedProducts.map((product) => (
            <div className="flex items-center gap-3 space-y-4" key={product.item_id}>
              <img className="w-[100px] rounded-xl" src={product.image} alt={product.name} />
              <p className="font-bold"> {product.item_name}</p>
           
              <button onClick={()=>handleDelete (product.item_id)} className="btn btn-primary">Delete</button>
            </div>
          ))}
        </div>
      );
      
};

export default Cart;