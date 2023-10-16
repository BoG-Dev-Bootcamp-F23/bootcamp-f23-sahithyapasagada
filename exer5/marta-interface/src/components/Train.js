import logo from './logo.png';
import rightArrow from './rightArrow.png';

export default function Train(props) {
    const {trainData} = props;

    const station = trainData["STATION"];
    const destination = trainData["DESTINATION"];
    const delay = trainData["DELAY"];
    const waitTime = trainData["WAITING_TIME"];
    const line = trainData["LINE"];

    function getLineColor() {
        if (line === "GOLD") {
            return ["Gold", "#FFD700"];
        } else if (line === "RED") {
            return ["Red", "#ff0000"];
        } else if (line === "BLUE") {
            return ["Blue", "#0000FF"];
        }
        return ["Green", "#008000"];
    }

    function getDelay() {
        if (trainData[delay == "T0S"]) {
            return <p className="onTime">On time</p>;
        } else {
            return <p className="delayed">Delayed</p>; 
        }
    }

    function getWaitTime() {
        let num = waitTime.split(" ");
        return (
            <div className="waitTime">
                <h1 className="wait">num[0]</h1>;
                <p className="min">num[1]</p>;
            </div>
        )  
    }

    return (
        <div className="train">
            <div className="left">
                <img src={logo} className="logo"/>
                <div className="top">
                    <h1 className="station">{station}</h1>
                    <img src={rightArrow} className="rightArrow"/>
                    <h1 className="destination">{destination}</h1>
                </div>
                <div className="bottom">
                    <p className="lineColor" style={{backgroundColor: getLineColor()[1]}}>{getLineColor()[0]}</p>
                    <p>{getDelay()}</p>
                </div>
            </div>
        </div>









    )
 


}
  