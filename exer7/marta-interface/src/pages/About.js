import map from './map.png';
import freq from './freq2.png';
import {useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="page">
                <h1 className="navTitle">ABOUT MARTA</h1>
                <button onClick = {() => navigate("/")} className = "homeButton">Home</button>
            </div>
            <div className="content">
                <div className="margin">
                    <div className='leftAbout'>
                        <div className='purpose'>
                            <h1 className='purposeHeader'>Who We Are</h1>
                            <p className="purposeDescription">We are the nation’s ninth largest transit system and the largest of 
                                its kind in the Southeast that provides bus, rail, and paratransit service.
                                With 40 years of operations under its belt, MARTA services three of the five core counties 
                                in the region and generates $2.6 billion in economic impact to the state of Georgia. Employees of the region’s 
                                fastest growing sectors overwhelmingly choose MARTA to get to and from work. People from every demographic across the region trust 
                                MARTA with their routine transportation needs.</p>
                        </div>
                        <h1 className='freqHeader'>Train Frequencies    </h1>
                        <img src={freq} className = "freqPicture" alt=""/>

                    </div>
                </div>
                <img src={map} className = "mapPicture" alt=""/>
            </div>
            
        </div>
        
        
    );


}