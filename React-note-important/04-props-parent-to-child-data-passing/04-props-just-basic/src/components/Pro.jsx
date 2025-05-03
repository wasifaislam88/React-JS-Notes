import P from "./P";


export default function Pro(props) {
  console.log(props);
  //output: {student: {...}, nextInfo: {...}, roll: 88, serial22: 99}
  console.log(props.student, props.nextInfo, props.roll, props.serial22);
  //output: {name: 'John', address: 'Earth'} {message: 'secret', phone: '017123456'} 88 99


  const skill= {
    web: "react",
    android: "java",
    year: 5
  }

  return (
    <div>
      <h2>Pro page 3</h2>
      <P skill={skill} nextInfo={props.nextInfo} />
    </div>
  )
}
