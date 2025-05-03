import { useEffect, useState } from "react";
import './Users.css'
import User from "./User";


const Users = () => {
    //useState([]) ekhane () er moddhe [] use korar karon  kono data na pele default value hisebe emply array thakbe. keno []? karon api ta array... for this reason {friends.length} value is 0 jodi array te data na thake tahole
    const [users , setUsers] = useState([]);

    // useEffect(()=>{},[])
    //callback function ()=>{} , dependency array []
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUsers(data))
    },[])
    return (
        <div className="border">
            <h2>Users: {users.length}</h2>

            
            {
                users.map(userrr => <User user={userrr}></User>)
            }
            
            


        </div>
    );
};

export default Users;

/*
*
* 1. declare a state to hold the data
* 2. useEffect with call back and no dependency (this code as a empty array)
* 3. use fetch OR async await to load data 
* 4. set loaded data to the state
* 5. display data on the component
*
*/

