export default function TrainList(props) {
  const {lineColor} = props;

  function getTrainInfo(currStation) {
    const newList = currStation.filter((currTodo) => {
      return currTodo !== todo;
    });
  }

  return (
    <div>
      <p>Color: {lineColor}</p>
    </div>
  );
}
