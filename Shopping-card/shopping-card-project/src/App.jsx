
import './App.css'
import Navbar from './component/Navbar'
import Cartcontainer from './component/Cartcontainer'
import Allproduct from './component/Allproduct'
import { useState } from 'react'


function App() {
  const [isActive,setIsActive] = useState({
    cart: true,
    status: "active"
  })

  const [selectedProducts,setselectedProducts] = useState([])

  const[price,setprice] = useState(500)

  const handleIncreasePrice = (pr) =>{
    setprice(price+pr)

  }
  const handleDeletPrice = (item_id) =>{
    const product = selectedProducts.find((p)=>p.item_id == item_id)
    setprice(price-product.price)

  }

  const handleDelete = (item_id) => {
    handleDeletPrice(item_id)
    const updatedProducts = selectedProducts.filter((p) => p.item_id !== item_id);
    setselectedProducts(updatedProducts);
  };
  

  const handleSelectedProduct = (product) => {
    // Check if the product is already in selectedProducts array

    const isProduct = selectedProducts.find(
      (singlep) => singlep.item_id === product.item_id
    );
  
    if (!isProduct) {
      handleIncreasePrice(product.price)
      const newProduct = [...selectedProducts, product];
      setselectedProducts(newProduct);
    } else {
      
      alert('This product is already added');
    }
  };
  


  const handleIsActiveState=(status)=>{
    if(status== "cart"){
      setIsActive({
        cart: true,
    status: "active"
      })
    }
    else{
      setIsActive({
         cart: false,
    status: "active"
      })
    }

  }
  console.log(isActive);
 

  return (
    <>
     <Navbar price = {price} selectedProducts={selectedProducts}></Navbar>
     <div className='md:flex space-y-8 p-3 justify-around'>
  
      <Cartcontainer  handleDelete ={ handleDelete } selectedProducts= {selectedProducts} isActive={isActive}  handleIsActiveState={handleIsActiveState}></Cartcontainer>
      <Allproduct  handleSelectedProduct={ handleSelectedProduct}></Allproduct>
     </div>
  
    </>
  )
}

export default App