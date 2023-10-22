import React from "react";
import ReactLoading from "react-loading";

export default function LoadingScreen() {
    return (
        <div className="loadingScreen">
            <h2>Loading...</h2>
            <div className="loading">
            <ReactLoading
                type="spin"
                color="#F7CE2C"
                width={400}
            />
            </div>
        </div>
    );
}
