import SelectPlayer from "./SelectPlayer";


const SelectedSection = ({selectedPlayer, handleDelete}) => {
    return (
        <div>
            {
                selectedPlayer.map(sPlayer => <SelectPlayer sPlayer={sPlayer} handleDelete={handleDelete}></SelectPlayer>)
            }
        </div>
    );
};

export default SelectedSection;