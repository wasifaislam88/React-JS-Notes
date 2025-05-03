//here isDone is FALSE and task is React

export default function Task1({isDone, task}) {



    return(
        <>



        {/* IMPORTANT: {} dynamic er moddheO dynamic {task} show korar jonno templete string use korte hobe ``  */}
        <li> {isDone? 'Finished' : 'Not Finished'} </li>
        {/* // Not Finished: */}

        <li> {isDone? `Finished: ${task}` : `Not Finished: ${task}`} </li>
        {/* // Not Finished: Learn React */}


        
        </>
    )
    

}
