import { useEffect } from "react";
import Train from "./Train";
import { useState } from "react";
export default function TrainList(props) {
  const {userColor, data, filterStation} = props;
  const [displayData, setDisplayData] = useState(filteredData);
  const [active, setActive] = useState([])
  let filters = [];
  var filteredData = (filterStation !== "All Stations" ? filteredData = data?.filter((train) => {return train["STATION"] === (filterStation.toUpperCase() + " STATION")}) : data)
  
  useEffect(() => {
    active.forEach((f) => {
        filteredData = filteredData.filter((train) => check(train, f))
    })
    setDisplayData(filteredData)
}, [filterStation])

  useEffect(() => {
    let data = filteredData
    active.forEach((f) => {
        data = data.filter((train) => (
            check(train, f)
        ))
    })  
    setDisplayData(data)
    console.log(displayData)
  }, [active])

  const check = (train, currFilter) => {
    const filterCriteria = {
      Arriving: (train) => train.WAITING_TIME === "Arriving",
      Scheduled: (train) => train.WAITING_TIME !== "Arriving",
      NorthBound: (train) => train.DIRECTION === "N",
      SouthBound: (train) => train.DIRECTION === "S",
      EastBound: (train) => train.DIRECTION === "E",
      WestBound: (train) => train.DIRECTION === "W",
    };
  
    return currFilter in filterCriteria ? filterCriteria[currFilter](train) : true;
  };

  function direction() {
    if (userColor === "GOLD" || userColor === "RED") {
      filters = ["Arriving", "Scheduled", "NorthBound", "SouthBound"];
    } else {
      filters = ["Arriving", "Scheduled", "EastBound", "WestBound"];
    }
    return (
      filters.map((f) => {
        const isActive = active.includes(f)
        return (
          <button key={f} onClick={() => {setActive(isActive ? active.filter(current => current !== f) : [...active, f])}} className={isActive ? 'buttonActive' : 'buttonInactive'}>{f}</button>
        )
      })
    )
  }

  return (
    <div className="trainList">
      <div className="buttonContainer">
        {direction()}
      </div>
        {displayData?.length === 0 ? <h1 className="none">No Current Trains Match Filters</h1> : displayData?.map((train) => {return <Train trainData={train} />})}
    </div>
  )
}
