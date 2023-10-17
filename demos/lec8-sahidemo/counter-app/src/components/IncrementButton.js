export default function IncrementButton(props) {
    return <button onClick={props.onClick}>Increment</button>
    /*return <button onClick={() => {
        props.updateCount(100);
    }}>Increment</button>*/
}