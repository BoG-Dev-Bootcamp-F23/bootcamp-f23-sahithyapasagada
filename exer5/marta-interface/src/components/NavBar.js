export default function NavBar(props) {
    const {currColor, stationData} = props;
    const stations = stationData[currColor.toLowerCase()];
    return (
        <div className="navBar">
            <p>Select your starting station</p>
            <div className="navBarElement">All Stations</div>
            {stations.map((station) => {
                return (
                    <div className="navBarElement">{station}</div>
                )
            })};
        </div>
    )

}
