const Sidebar = ({recipiesidebar,handleRemove,preparedrecipe,calculateTimeAndCalories,totalTime,totalCalories}) => {
    return (

        <div className='md:w-1/3 border-2 text-gray-700 bg-base-100 rounded-xl'>
            <h1 className="border-2 m-5 p-5 bg-green-100 rounded-xl border-green-500 text-3xl font-bold">want to cook: {recipiesidebar.length}</h1>
           <div className="overflow-x-auto">

  <table className="table text-gray-400 font-bold">

    <thead className="text-green-500 font-bold ">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>calories</th>
      </tr>

    </thead>
    <hr />
 
    <tbody>
  {recipiesidebar.map((recipie, index) => (
    <tr className="hover" key={index}>
      <th>{index + 1}</th>
      <td>{recipie.recipe_name}</td>
      <td>{recipie.preparation_time}</td>
      <td>{recipie.calories}</td>
      <td>
      <button onClick={()=>handleRemove(recipie.recipe_id,calculateTimeAndCalories(recipie.preparation_time,recipie.calories)) }  className="px-5 py-1 bg-green-500 text-white rounded-3xl ">preparing</button>
      </td>
    </tr>
  ))}
</tbody>

     

  </table>
</div>
{/* //currently cook table */}
<div className="overflow-x-auto mt-8">
<h1 className="border-2 m-5 p-5 bg-green-100 rounded-xl border-green-500 text-3xl font-bold">Currently cook: {preparedrecipe.length}</h1>
  <table className="table text-gray-400 font-bold">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>calories</th>
      </tr>
    </thead>
 
    <tbody>
  {preparedrecipe.map((recipie, index) => (
    <tr className="hover" key={index}>
      <th>{index + 1}</th>
      <td>{recipie.recipe_name}</td>
      <td>{recipie.preparation_time}</td>
      <td>{recipie.calories}</td>
     
    </tr>
    
  ))}
   
      <tr className="border-none">
        <th></th>
      <td></td>
      <td>Total Time: {totalTime}</td>
      <td>Total Calories: {totalCalories}</td>
      </tr>
</tbody>

     

  </table>
</div>
        </div>
    );
};

export default Sidebar;