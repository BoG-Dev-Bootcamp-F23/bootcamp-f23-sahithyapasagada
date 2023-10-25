import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import ColorButtons from "../components/ColorButtons";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LinesPage() {
  const API_URL_ARRIVALS = 'http://13.59.196.129:3001/arrivals/'
  const API_URL_STATIONS = 'http://13.59.196.129:3001/stations/'
  const navigate = useNavigate();
  const params = useParams();
  const currColor = params.lineColor;
  //const [currColor, setCurrColor] = useState("GOLD");
  const [trainData, setTrainData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStation, setActiveStation] = useState("All Stations");

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const trainResponse = await fetch(API_URL_ARRIVALS + currColor)
      const trainAPIData = await trainResponse.json()
      const stationResponse = await fetch(API_URL_STATIONS + currColor)
      const stationAPIData = await stationResponse.json()
      setTrainData(trainAPIData)
      setStationData(stationAPIData)
      setLoading(false)
    }
    fetchData()
  }, [currColor])
  
  return (
    <div className="linesPages">
      <ColorButtons 
        setGold={() => {navigate("/lines/gold")}}
        setRed={() => {navigate("/lines/red")}}
        setBlue={() => {navigate("/lines/blue")}}
        setGreen={() => {navigate("/lines/green")}}
      />
    {loading ? 
      <div className="loadingScreen">
        <h2>Loading...</h2>
        <div className="loading"> 

        <ReactLoading type="spin" color={currColor} width={400}/></div>
      </div> 
      : 
      <div>
        <h1 className="heading">{currColor}</h1>
        <div className="container">
          <NavBar stationData={stationData} updateStation = {setActiveStation} activeStation={activeStation}/>
          {console.log(activeStation)}
          <TrainList 
            userColor={currColor} 
            data={trainData} 
            filterStation = {activeStation} 
          />
        </div>
      </div>
    }

    </div>
  )
}