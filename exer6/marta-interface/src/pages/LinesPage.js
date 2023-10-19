//import stationData from "../server/stationData";
import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import LoadingScreen from "./LoadingScreen";
import { useState } from "react";
import { useEffect } from "react";

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("GOLD");
  const [data, setData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL_ARRIVALS = `http://13.59.196.129:3001/arrivals/${currColor.toLowerCase()}`;
  const API_URL_STATIONS = `http://13.59.196.129:3001/stations/${currColor.toLowerCase()}`;

  useEffect(() => {
    fetch(API_URL_ARRIVALS)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));

    fetch(API_URL_STATIONS)
      .then((response) => response.json())
      .then((stationData) => setStationData(stationData))
      .then(() => setLoading(false));
    
  }, [currColor]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="linesPages">
          <div className="colorButtonContainer">
            <button
              style={{ borderColor: "#E8B70C", backgroundColor: "#E8B70C" }}
              className="colorButton"
              onClick={() => {
                setCurrColor("GOLD");
              }}
            >
              Gold
            </button>

            <button
              style={{ borderColor: "#ff0000", backgroundColor: "#ff0000" }}
              className="colorButton"
              onClick={() => {
                setCurrColor("RED");
              }}
            >
              Red
            </button>

            <button
              style={{ borderColor: "#0000FF", backgroundColor: "#0000FF" }}
              className="colorButton"
              onClick={() => {
                setCurrColor("BLUE");
              }}
            >
              Blue
            </button>

            <button
              style={{ borderColor: "#008000", backgroundColor: "#008000" }}
              className="colorButton"
              onClick={() => {
                setCurrColor("GREEN");
              }}
            >
              Green
            </button>
          </div>

          <h1 className="heading">{currColor}</h1>
          <div className="container">
            <NavBar stationData={stationData}/>
            <TrainList userColor={currColor} data={data}/>
          </div>
        </div>
      )}
    </>
  );
}