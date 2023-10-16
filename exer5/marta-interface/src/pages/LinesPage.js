// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import { useState } from "react";

export default function LinesPage() {
  // initialize some currColor state
  const[currColor, setCurrColor] = useState("");

  function setCurrColor(todo) {
    const newList = todos.filter((currTodo) => {
      return currTodo !== todo;
    });
    setTodos(newList);
  }

  return (
    <div>
      // YOUR JSX CODE
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      // YOUR JSX CODE
    </div>
  );
}