//here isDone is FALSE and task is MongoDB

// && true hole print
// || false hole print


const Task3 = ({task, isDone}) => {
    return (
        <>


        {/* NOTE: True hoel print korbe */}
        <li>{task} 😶 {isDone && 'must do it'} </li> {/*UI output: MongoDB 😶 */}
        {/* true hole: MongoDB 😶 must do it */}
        {/* false hole: MongoDB 😶*/}



        {/* NOTE: false hole print korbe */}
        <li>{task} 🙂 {isDone ||  'do it'} </li> {/*UI output: MongoDB 🙂 do it */}
        {/* true hole: MongoDB 🙂 */}
        {/* false hole: MongoDB 🙂 do it */}



        </>
    );
};

export default Task3;