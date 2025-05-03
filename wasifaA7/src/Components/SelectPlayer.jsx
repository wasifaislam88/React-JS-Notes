import { RiDeleteBin5Line } from "react-icons/ri";

const SelectPlayer = ({ sPlayer, handleDelete }) => {
    return (
        <div className="border mt-4 w-11/12 mx-auto rounded-2xl flex gap-5 items-center">
            <p>{sPlayer.playerId}</p>
            <img className="w-[100px]" src={sPlayer.image} alt="image"></img>
            <p>{sPlayer.name}</p>
{/* sPlayer is a object... contatin those data that i click */}
            <button onClick={()=> handleDelete(sPlayer)}>
                <RiDeleteBin5Line />
            </button>
        </div>
    );
};

export default SelectPlayer;