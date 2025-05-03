// const product = [

//     {
//         id: '201',
//         name: 'Air-Phone',
//         price: 200,
//         stock: 20,
//         quantity: 50
//     },
//     {
//         id: '202',
//         name: 'AC',
//         price: 900,
//         stock: 10,
//         quantity: 50
//     },
//     {
//         id: '203',
//         name: 'Smart-Tv',
//         price: 200,
//         stock: 30,
//         quantity: 50
//     },

    
// ]





// const TableRow = ({id, name , stock, price, quantity, total}) => {
//     return(
//         <tr>
//             <td>{id}</td>
//             <td>{name}</td>
//             <td>{stock}</td>
//             <td>{price}</td>
//             <td>{quantity}</td>
//             <td>{total}</td>
//             <td>
//                 <button >+</button>
//                 <button >-</button>
//             </td>
//         </tr>
//     )
// }


// const Second = () => {




//     return (
//         <div>
//             <h1>Second Component with Product Table</h1>
//             <table>
//                 <thead>

//                     <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Stock</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {
//                         product.map(product => <TableRow key={product.id} {...product}/>)
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Second;