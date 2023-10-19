import Train from "./Train";
import { useState } from "react";
import { useEffect } from "react";

export default function TrainList(props) {
  // const {userColor, trainData} = props;
  const {userColor} = props;
  const [data, setData] = useState(null);
  // const trainArrivals = trainData["RailArrivals"]

  const API_URL = `http://13.59.196.129:3001/arrivals/${userColor.toLowerCase()}`

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setData(data))
  },[userColor])

  function direction() {
    if (userColor === "GOLD" | userColor === "RED") {
      return (
        <div className="filter">
            <button style={{ backgroundColor: 'black', color: 'white', borderColor: 'black',}}>Arriving</button>
            <button>Scheduled</button>
            <button>Northbound</button>
            <button>Southbound</button>
        </div>
      )
    }
    return (
      <div className="filter">
          <button style={{ backgroundColor: 'black', color: 'white', borderColor: 'black',}}>Arriving</button>
          <button>Scheduled</button>
          <button>Eastbound</button>
          <button>Westbound</button>
      </div>
    )
  }

  return (
    <div className="trainList">
      <div>
        {direction()}
      </div>
        {data?.map((train) => {
          return <Train trainData={train} />
        })}
    </div>
  )
}
