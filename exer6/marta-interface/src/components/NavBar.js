import { useState } from "react";
export default function NavBar(props) {
    const {stationData} = props;
    const [activeStation, setActiveStation] = useState("All Stations");


    return (
        <div className="navBar">
            <p className="select">Select your starting station</p>
            <div className={"All Stations" === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                onClick={() => {
                    setActiveStation("All Stations");
                }}
            >All Stations</div>

            {stationData.map((station) => {
                return (
                    <div className={station === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                        onClick={() => {
                            setActiveStation(station);
                        }}
                    >{station}</div>
                )
            })}
            
        </div>
    )

}