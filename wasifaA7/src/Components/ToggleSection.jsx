import { useState } from "react";
import AvailableSection from "./AvailableSection";
import SelectedSection from "./SelectedSection";


const ToggleSection = ({handleSelect, selectedPlayer, handleDelete, coin, setCoin}) => {


    const [state, setState] = useState('available')

    const handleState = (newState) => {
        setState(newState)
    }


    return (
        <div >

            {/* up section */}
            <section className="flex justify-between w-11/12 mx-auto mt-5">
                {/* left section*/}
                <section>
                    {
                        state == 'available' ? "Available Players" : "Selected Players"
                    }
                </section>



                {/* right section */}
                <section className="border rounded-xl">
                    <button
                        style={{
                            color: "blue",
                            // quotation dileo kaz korbe na kileo kaz korbe jodi number hoy
                            // string hole must quotation dite hobe
                            fontWeight: 700,
                            borderRadius: "20px",
                            backgroundColor: state == 'available' ? "#FFFF00" : "white",
                            // color: "red"
                        }}
                        onClick={() => handleState('available')}
                        className="pr-2 py-2">Available</button>

                    <button
                        style={{
                            color: "blue",
                            fontWeight: 700,
                            borderRadius: "20px",
                            backgroundColor: state == 'available' ? "white" : "yellow",
                            // color: "red"
                        }}
                        onClick={() => handleState('selectedXYZ')}
                        className="pl-2 py-2">Selected</button>
                </section>
            </section>



            {/* Under Section */}
            <section>
                {
                    state == 'available' 
                    ? 
                    <AvailableSection handleSelect={handleSelect} coin={coin} setCoin={setCoin}></AvailableSection> 
                    : 
                    <SelectedSection selectedPlayer={selectedPlayer} handleDelete={handleDelete} ></SelectedSection>
                }
            </section>
        </div>
    );
};

export default ToggleSection;