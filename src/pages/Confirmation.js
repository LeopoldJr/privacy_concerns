import React from "react";
import {
    useNavigate
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Confirmation.css";

export default function Confirmation(){
    let navigate = useNavigate();
    return(
        <div className="Confirmation">
            <h2>Settings Set! Thank you!</h2>

            <Button className = "return-button" onClick = {() => {navigate("/Settings")}}>Edit Settings</Button>{' '}
        </div>
    )
}