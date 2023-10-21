//import stationData from "../server/stationData";
import TrainList from "../components/TrainList";
import NavBar from "../components/NavBar";
import ColorButtons from "../components/ColorButtons";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useEffect } from "react";

export default function LinesPage() {
  const API_URL_ARRIVALS = 'http://13.59.196.129:3001/arrivals/'
  const API_URL_STATIONS = 'http://13.59.196.129:3001/stations/'

  const [currColor, setCurrColor] = useState("GOLD");
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

  //C:\_home\bootcamp-f23-sahithyapasagada\exer6\marta-interface\src\pages\LinesPage.js

  return (
    <div className="linesPages">
      <ColorButtons 
        setGold={() => {setCurrColor("GOLD")}}
        setRed={() => {setCurrColor("RED")}}
        setBlue={() => {setCurrColor("BLUE")}}
        setGreen={() => {setCurrColor("GREEN")}}
      />
    {loading ? 
      <div className="loadingScreen">
        <h2>Loading...</h2>
        <div className="loading">

        <ReactLoading type="spin" color={currColor} width={400}/></div>
      </div> : 
      <div>
        <h1 className="heading">{currColor}</h1>
        <div className="container">
          <NavBar stationData={stationData} updateStation = {setActiveStation} activeStation={activeStation}/>
          {console.log(activeStation)}
          <TrainList userColor={currColor} data={trainData} filterStation = {activeStation}/>
        </div>
      </div>
    }

    </div>
  )
}