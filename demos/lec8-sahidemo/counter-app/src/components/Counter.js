import {useState} from "react";
import IncrementButton from "./IncrementButton";
import ResetButton from "./ResetButton";

export default function Counter() {
    const [count, setCount] = useState(0);


    return (
        <div>
            <div>Our count is currently: {count}</div>
            <IncrementButton 
                //One method
                onClick= {() => {
                    setCount(count + 1);
                }} 
                count={count} //passes state down with child components

                              //with todo app, state is a list


                //Increment button more control, but better to do above
                //updateCount = {setCount}
            />
            <ResetButton setCount={setCount}/>
        </div>
    )
}