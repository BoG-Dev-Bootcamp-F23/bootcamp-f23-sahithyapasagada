import Train from "./Train";
export default function TrainList(props) {
  const {userColor, trainData} = props;
  const line = trainData["LINE"];
  const trainArrivals = trainData["RailArrivals"];

  function direction() {
    if (userColor === "GOLD" | userColor === "RED") {
      return (
        <div>
            <button>Arriving</button>
            <button>Scheduled</button>
            <button>Northbound</button>
            <button>Southbound</button>
        </div>
      );
    }
    return (
      <div>
          <button>Arriving</button>
          <button>Scheduled</button>
          <button>Eastbound</button>
          <button>Westbound</button>
      </div>
    );
  }

  return (
    <div className="trainList">
      <div>
        {direction()};
      </div>
        {trainArrivals.map((train) => {
          if(line === userColor) {
            return <Train trainData={train} />
          }
        })};
    </div>
  )
}
