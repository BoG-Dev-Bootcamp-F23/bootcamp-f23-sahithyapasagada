// get static data
import stationData from '../server/stationData';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useState } from "react";

export default function LinesPage() {
  // initialize some currColor state
  const[currColor, setCurrColor] = useState("GOLD");

  return (
    <div className='linesPages'>
      <div className='colorButtonContainer'>
            <button style={{ borderColor: '#E8B70C', backgroundColor: '#E8B70C',}} className='colorButton'
              onClick= {() => {
                setCurrColor("GOLD");
              }} 
            >Gold</button>

            <button style={{ borderColor: '#ff0000', backgroundColor: '#ff0000',}} className='colorButton'
              onClick= {() => {
                setCurrColor("RED");
              }} 
            >Red</button>

            <button style={{ borderColor: '#0000FF', backgroundColor: '#0000FF',}} className='colorButton'
              onClick= {() => {
                setCurrColor("BLUE");
              }} 
            >Blue</button>

            <button style={{ borderColor: '#008000', backgroundColor: '#008000',}} className='colorButton'
              onClick= {() => {
                setCurrColor("GREEN");
              }} 
            >Green</button>

      </div>
      <h1 className='heading'>{currColor}</h1>
      <div className='container'>
        <NavBar currColor={currColor} stationData={stationData} />
        {/* <TrainList userColor={currColor} trainData={trainData} /> */}
        <TrainList userColor={currColor}/>
      </div>
    </div>
  )
}