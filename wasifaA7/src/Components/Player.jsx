

const Player = ({player, handleSelect, coin, setCoin}) => {
    return (
        <div className="border rounded-2xl">
            <p>{player.playerId}</p>
            <img className="w-[150px]" src={player.image} alt="img"></img>
            <p>{player.name}</p>

            <p>Price: {player.biddingPrice}</p>
            <button
            onClick={()=>{
                handleSelect(player);
                setCoin(coin-player.biddingPrice)
            }}
             className="border rounded-2xl p-1 bg-green-300">Select</button>
            
        </div>
    );
};

export default Player;