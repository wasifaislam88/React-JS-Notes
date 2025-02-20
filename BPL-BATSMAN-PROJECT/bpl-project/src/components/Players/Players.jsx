import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

const Players = ({onSelectPlayer}) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, []);

    // toast alert for choose player button
    const handleChoosePlayer = (player) => {
        onSelectPlayer(player);
    }

    return (
        <div className="container mx-auto pb-14">
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                players.map(player => (
                    <div key={player.id} className="card p-6 border">
                        <figure>
                            <img className="rounded-2xl w-full h-60 object-cover" src={player.image} alt="player_image" />
                        </figure>

                        <div className="pt-5">
                            <div className="flex items-center gap-4 pb-4">
                                <i className="fa-solid fa-user text-2xl"></i>
                                <h2 className="card-title">{player.name} </h2>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 text-gray-500">
                                    <i className="fa-solid fa-flag"></i>
                                    <h5>{player.country} </h5>
                                </div>
                                <div className="border bg-[#f3f3f3] px-4 py-2 rounded-lg">
                                    <h4>{player.role} </h4>
                                </div>
                            </div>
                            
                            <div className="divider"></div>

                            <div className="flex flex-col space-y-4">
                                <h4 className="font-bold text-black">Rating</h4>

                                <div className="flex justify-between items-center gap-5">
                                    <h5 className="font-semibold text-black">{player.battingBowlingType} </h5>
                                    <h5 className="font-semibold text-gray-500">{player.battingBowlingType} </h5>
                                </div>

                                <div className="card-actions flex justify-between items-center">
                                        <p className="font-bold text-black">Price: ${player.biddingPrice} </p>
                                        <button onClick={() => handleChoosePlayer(player)} className="btn bg-transparent text-sm font-normal">Choose Player</button>
                                </div>
                            </div>
                        </div>
                  </div>
            ))}
            </div>
        </div>
    );
};

Players.propTypes = {
    onSelectPlayer: PropTypes.func.isRequired,
};

export default Players;