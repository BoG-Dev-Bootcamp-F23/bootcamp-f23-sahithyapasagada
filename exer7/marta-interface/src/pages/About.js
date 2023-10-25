import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="home">
            <h1>MARTA</h1>
            <p onClick = {() => navigate("/about")} className = "about_nav">About MARTA</p>
            </div>
            <div className="homeContent">
            <div className="routes">
                    <h2>VIEW ROUTES SCHEDULE</h2>
                    <p className="route" onClick={() => {navigate("/lines/gold")}}>Gold Line</p>
                    <p className="route" onClick={() => {navigate("/lines/red")}}>Red Line</p>
                    <p className="route" onClick={() => {navigate("/lines/green")}}>Green Line</p>
                    <p className="route" onClick={() => {navigate("/lines/blue")}}>Blue Line</p>
                </div>
            </div>
        </div>
        
        
    );


}