import { useEffect, useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

const AvailablePlayers = ({handleBtnActiveState, btnActive, coins}) => {
    const [availablePlayers, setAvailablePlayers] = useState([]);

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    console.log(availablePlayers);

    useEffect(() => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setAvailablePlayers(data))
    }, [])

    const handleSelectPlayer = (player) => {
        if (player.biddingPrice < coins) {
            if (selectedPlayers.length<6) {
                const newSelectedPlayers = [...selectedPlayers, player];
                setSelectedPlayers(newSelectedPlayers);
                toast.success(`Congratulation !! ${player.name} is now in your squad`,{
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            }

            else {
                toast.error("Sorry!! Not enough space in your selected players slot.", {
                    position: "top-center",
                   autoClose: 3000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "colored",
               })
            }
        }

        else {
            toast.error("Not enough coins to select this player! Please get coin from Claim Free Credit!", {
                 position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }

    return (
        <div className="container mx-auto ">
            <div className="flex justify-between items-center mb-8">
                <h1 className="font-bold text-3xl text-black">{btnActive.available ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`}</h1>
                <div className="flex">
                    <button onClick={() => handleBtnActiveState("available")} className={`${btnActive.available? "border-l border-t border-b rounded-l-xl bg-[#E7FE29] font-bold text-black px-7 py-3" : "border-l border-t border-b rounded-l-xl text-gray-500 px-7 py-3"}`} >Available</button>

                    <button onClick={() => handleBtnActiveState("selected")} className={`${btnActive.available? "border-t border-b border-r rounded-r-xl text-gray-500  px-7 py-3" : "border-t border-b border-r rounded-r-xl bg-[#E7FE29] font-bold text-black px-7 py-3"}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {
                btnActive.available? (<Players onSelectPlayer={handleSelectPlayer}></Players>) : (<SelectedPlayers selectedPlayers={selectedPlayers} handleBtnActiveState={handleBtnActiveState}></SelectedPlayers>)
                
            }
        </div>
    );
};

AvailablePlayers.propTypes ={
    handleBtnActiveState: PropTypes.object.isRequired,
    btnActive: PropTypes.object.isRequired,
    coins: PropTypes.number.isRequired
}

export default AvailablePlayers;