
const Singleproduct = ({product, handleSelectedProduct}) => {
    console.log('product dekbo',product);
    const{image,item_id,category,price,brand,item_name,description} = product
    return (
        <div className="md:w-[300px] w-full shadow-xl rounded-xl m-3 border-2  ">
            <img className="w-full rounded-lg" src={image} alt="" />
          <div className="space-y-4 p-5">
          <h2 className="font-bold text-xl">{item_name}</h2>
            <p className="text-xl">{description}</p>
            <div className="space-y-4">
                <p className="font-bold">price: ${price}</p>
                <p className="font-bold">category: {category?"feature category":"not category"}</p>

                <button onClick={()=> handleSelectedProduct(product)} className="btn  font-bold bg-blue-700 rounded btn-primary">Add to cart</button>
          </div>
            </div>
           
            
        </div>
    );
};

export default Singleproduct;