import PropTypes from 'prop-types';

const SelectedPlayers = ({selectedPlayers, handleBtnActiveState}) => {

return (
    <div className="mb-96">
            
     <ul className="mt-8 mb-12 space-y-6">
    {selectedPlayers.map(player => (
    <li key={player.id} className="p-6 border rounded-2xl">
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-6'>
                <figure>
                    <img className="rounded-xl w-20 h-20 object-cover" src={player.image} alt={player.name} />
                        </figure>

            <div className="space-y-2">
            <h2 className="font-semibold text-lg">{player.name}</h2>
            <p className="text-gray-500">{player.battingBowlingType}</p>
                 <p className="text-gray-500">Price: ${player.biddingPrice} </p>
            </div>
            </div>
            <div>
        <button><i className="fa-solid fa-trash-can w-5 h-5 text-red-400"></i></button>
        </div>
        </div>
        </li>
        ))}
        </ul>
            <div>
            <button onClick={() => handleBtnActiveState("available")} className='btn font-bold bg-[#E7FE29] text-black px-5 py-3 rounded-xl'>Add More Player</button>
                </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handleBtnActiveState: PropTypes.array.isRequired
};

export default SelectedPlayers;