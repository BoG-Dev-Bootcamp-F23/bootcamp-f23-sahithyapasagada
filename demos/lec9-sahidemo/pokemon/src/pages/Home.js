import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate();
    if (props.loggedIn) {
        return <>loggedIn</>;
    } else {
        return (
            <div>
                <p>not logged in</p>
                <button onClick={() => {
                    navigate("/login");
                    
                }}>
                    log in page
                </button>
            </div>
        )
    }
    

}