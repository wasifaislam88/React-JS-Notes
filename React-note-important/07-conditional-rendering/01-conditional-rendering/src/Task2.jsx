//here isDone is FALSE and task is NodeJS

export default function Task2({isDone, task}) {

  
    if(isDone){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Not Finished: {task}</li>
    }

}
