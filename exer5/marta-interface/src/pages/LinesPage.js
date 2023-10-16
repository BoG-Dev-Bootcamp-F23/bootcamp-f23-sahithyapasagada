// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useState } from "react";

export default function LinesPage() {
  // initialize some currColor state
  const[currColor, setCurrColor] = useState("GOLD");
  return (
    <div className='linesPages'>
      <h1 className='heading'>{currColor}</h1>
      <div className='container'>
        <NavBar currColor={currColor} stationData={stationData} />
        <TrainList currColor={currColor} trainData={trainData} />
      </div>
    </div>
  );
}