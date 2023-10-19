import { useState } from "react";
export default function NavBar(props) {
    const {currColor, stationData} = props;
    const [activeStation, setActiveStation] = useState("");
    const stations = stationData[currColor.toLowerCase()];

    return (
        <div className="navBar">
            <p className="select">Select your starting station</p>
            <div className={"All Stations" === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                onClick={() => {
                    setActiveStation("All Stations");
                }}
            >All Stations</div>
            {stations.map((station) => {
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