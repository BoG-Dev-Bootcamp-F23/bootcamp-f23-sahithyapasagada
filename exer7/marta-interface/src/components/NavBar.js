export default function NavBar({stationData, updateStation, activeStation}) {

    return (
        <div className="navBar">
            <p className="select">Select your starting station</p>
            <div className={"All Stations" === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                onClick={() => {
                    updateStation("All Stations");
                }}
            >All Stations</div>

            {stationData?.map((station) => {
                return (
                    <div className={station === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                        onClick={() => {
                            updateStation(station);
                        }}
                    >{station}</div>
                )
            })}
        </div>
    )

}