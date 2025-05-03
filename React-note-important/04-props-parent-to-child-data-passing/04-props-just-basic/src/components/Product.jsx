import Pro from "./Pro";



export default function Product({roll,serial22,nextInfo}) {
  console.log(roll,nextInfo,serial22);
  //output: 88 {message: "secret", phone: "017123456"} 99
  
  const student = {
    name: "John",
    address: "Earth"
  }

  return (
    <div>
      <h2>Product page 2</h2>
      <Pro student={student} nextInfo={nextInfo} roll={roll} serial22={serial22}  />
    </div>
  )
}
