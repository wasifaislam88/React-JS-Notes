

export default function P(abc) {

    //IMPORTANT:
    // const {xyz} = abc// xyz worng. karon xyz namer kichu pass koar hoyni. jeta pass koeci seta holo nextInfo and skill.

    //alada vabe ba aksathe distructure kora jai
    // const {skill} = abc
    // const {nextInfo} = abc
    // OR
    const {skill, nextInfo} = abc
    console.log(skill);//output: {web: 'react', android: 'java', year: 5}
    console.log(nextInfo);//output: {message: 'secret', phone: '017123456'}

    

  return (
    <div>
      <h2>p page 4</h2>
    </div>
  )
}
