import Product from "./Product";


export default function Products({roll,serial2, info}) {
  console.log(roll,info,serial2);
  //output: 88 {message: "secret", phone: "017123456"} 99
  
  return (
    <div>
      <h2>Products page 1</h2>
      <Product roll={roll} serial22={serial2} nextInfo={info}/>
    </div>
  )
}
