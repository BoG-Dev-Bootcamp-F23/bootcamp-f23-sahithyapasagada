export default function ColorButtons(props) {
    return (
        <div className="colorButtonContainer">
            <button style={{ borderColor: "#E8B70C", backgroundColor: "#E8B70C" }} className="colorButton" onClick={props.setGold}>Gold</button>
            <button style={{ borderColor: "#ff0000", backgroundColor: "#ff0000" }} className="colorButton" onClick={props.setRed}>Red</button>
            <button style={{ borderColor: "#0000FF", backgroundColor: "#0000FF" }} className="colorButton" onClick={props.setBlue}>Blue</button>
            <button style={{ borderColor: "#008000", backgroundColor: "#008000" }} className="colorButton" onClick={props.setGreen}>Green</button>
        </div>
    )
}