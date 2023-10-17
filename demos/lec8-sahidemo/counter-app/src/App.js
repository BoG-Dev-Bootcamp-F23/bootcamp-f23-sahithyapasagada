import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import { useEffect } from 'react';

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  //const [index, setIndex] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const res = await fetch(API_URL + 1);
    const newData = await res.json();
    //while waiting for data to fetch we're loading


    setData(newData);
    setLoading(false); //bc no longer loading
  }
  
  //fetch data at beginning
  useEffect(() => {
      getData();
  }, []);

  // useEffect(() => {
  //   getData();
  // }, [index]); //only dependency is index, whenever index changes fetch data convert and update it


  return (
    <>
      <div>Bulbasaur name fetcher:</div>
      {/* conditional rendering */}
      {loading ? 
        <div>Loading...</div> 
        : <div>Pokemon name: {data?.name}</div>
      }

      {/* <div>Index: {index}</div>
      <div>Pokemon Name: {data?.name}</div> 
      <button onClick={() => {
        setIndex(index + 1);
      }}>+1</button>

      <button onClick={() => {
        setIndex(index - 1);
      }}>-1</button> */}
    </>
  )


  return (
    <div className="App">
      {/*<Counter />*/}
    </div>
  );
}

export default App;
