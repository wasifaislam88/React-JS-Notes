
import { useEffect } from 'react';
import { useState } from 'react';
// import { IoIosTimer } from "react-icons/io";
// import { GiCook } from "react-icons/gi";

const Racipies =({showrecipies}) => {
    const [recipies,setRecipies] = useState([])
    // const[recipiesidebar,setRecipiessidebar] = useState([])
    
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data => setRecipies(data))
    },[])
//    const showrecipies =(recipie =>{
//     console.log('this is recipe',recipie)
//     const newrecipies = [...recipiesidebar,recipie]
//     console.log('this is new',newrecipies)
//     setRecipiessidebar(newrecipies)
//    })

    return (
        <div className='md:w-2/3 grid md:grid-cols-2 gap-4 '>
        {
          recipies.map(recipie => (
            <div key={recipie.id} >
              <div className=" card bg-base-100 shadow-xl border-2">
                <figure>
                  <img
                    src={recipie.image_url}  // Corrected the image reference
                    alt={recipie.title || "Image"}
                    className="w-full h-60 object-cover" // Optional styling
                  />
                </figure>
                <div className="text-left mt-4 p-8">
                  <h2 className=" font-bold text-2xl mb-3">{recipie.recipe_name}</h2>
                  <p className='text-xl font-medium mb-3'> {recipie.short_description}</p>
                  <h3 className='text-xl font-bold mb-4'>Ingradients: {recipie.ingredients.length}</h3>
                  <ul className="text-sm font-semibold list-disc pl-5 space-y-1">
  {
    recipie.ingredients.map((ingredient, id) => (
      <li key={id}>
        {ingredient} 
      </li>
    ))
  }
</ul>
<div className='flex gap-4'>
    <div className='my-4 flex items-center justify-center gap-2 font-bold '>
   {/* <IoIosTimer minutes className='text-2xl font-bold' /> */}
   <p>{recipie.preparation_time} minutes</p>
    </div>
    <div className='my-4 flex items-center justify-center gap-2 font-bold '>
   {/* <GiCook  className='text-2xl font-bold' /> */}
   <p>{recipie.calories}kcal per serving</p>
    </div>
</div>
      <div className="card-actions justify-end">
      <button onClick={()=>showrecipies(recipie)} className="py-2 px-5 bg-green-500 text-white rounded-3xl text-xl">want to cook</button>
</div>
  </div>
    </div>
      </div>
          ))
        }
      </div>
      
            
        
    );
};



export default Racipies;