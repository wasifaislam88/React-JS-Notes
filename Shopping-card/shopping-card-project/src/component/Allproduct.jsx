import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Singleproduct from './SingleProduct/Singleproduct';

const Allproduct =({handleSelectedProduct}) => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
   
    return (
        <div>
            <h1 className='text-2xl font-bold'>AllproductCard</h1>
            {
                products.map((product)=><Singleproduct  handleSelectedProduct={ handleSelectedProduct} key={product.id}product={product}></Singleproduct>)
            }
        </div>
    );
};

Allproduct.propTypes = {
    Allproduct : PropTypes.array.isRequired
    
};

export default Allproduct;