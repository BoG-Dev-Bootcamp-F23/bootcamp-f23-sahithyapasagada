import Train from "./Train";

export default function TrainList(props) {
  const {userColor, data} = props;

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
