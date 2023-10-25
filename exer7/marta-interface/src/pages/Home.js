import {useNavigate } from 'react-router-dom';
import train from './train.png';
export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="page">
                <h2 className='navTitle'>MARTA</h2>
                <p onClick = {() => navigate("/about")} className = "aboutMarta">About MARTA</p>
            </div>  
            <div className="content">
                <div className="margin">
                        <h1 className='view'>VIEW ROUTES SCHEDULE</h1>
                        <div className="route" onClick={() => {navigate("/lines/gold")}}>Gold Line</div>
                        <div className="route" onClick={() => {navigate("/lines/red")}}>Red Line</div>
                        <div className="route" onClick={() => {navigate("/lines/green")}}>Green Line</div>
                        <div className="route" onClick={() => {navigate("/lines/blue")}}>Blue Line</div>
                </div>
                <img src={train} className = "trainPicture" alt=""/>
            </div>
        </div>
        
        
    );


}