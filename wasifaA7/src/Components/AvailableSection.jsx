import { useEffect, useState } from "react";
import Player from "./Player";


const AvailableSection = ({handleSelect,coin, setCoin}) => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('/players.json')
        .then(res=> res.json())
        .then(data => setPlayers(data))
    },[])
    // console.log(players.length)
    

    return (
        <div className="grid grid-cols-3 gap-3">
            {/* available section */}
            {/* <p>{players.length}</p> */}
            {
                players.map(player => <Player player={player} handleSelect={handleSelect} coin={coin} setCoin={setCoin}></Player>)
            }
        </div>
    );
};

export default AvailableSection;