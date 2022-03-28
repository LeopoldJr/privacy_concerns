import React from "react";
import {
    useNavigate
} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Col, Row, Form, Check, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styling/Questionaire.css';
// import FormCheck from 'react-bootstrap/FormCheck'
import useInputState from "../hooks/useInputState";
//   import { useNavigate } from "react-router-dom";
// import Overlay from 'react-bootstrap/Overlay'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const Questionaire = ({ handleInputChange3, handleInputChange4, handleInputChange5, data, data2, data3, data4, data5, toggleData2, setData}) => { //
    let navigate = useNavigate();
        
    function handleSubmit(e) {
        console.log(`${data3}, ${data4}, ${data5}`);
        navigate("/Confirmation");
        

    }
    const popover1 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Location Tracking</Popover.Header>
          <Popover.Body>
          Location tracking allows our company to track your car and store the routes you take in order to better serve you.
          </Popover.Body>
        </Popover>
    );
    const popover2 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Location Tracking Precision</Popover.Header>
          <Popover.Body>
          Determines the precision at which your location will be tracked. 
          The more precision, the more convenient Location Tracking will be. 
          The less precision, the more privacy you will have while still gaining some benefits from location tracking.
          <br/><b>Location Tracking must be turned on to use this feature</b>
          </Popover.Body>
        </Popover>
    );
    const popover3 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Data Sharing</Popover.Header>
          <Popover.Body>
          Sharing data with the company allows your vehicle to suggest routes and tailor your driving and navigation experience to you.
          Sharing data with 3rd parties allows for that same data to be used to tailor your experiences elsewhere as well.
          </Popover.Body>
        </Popover>
    );

    return (
        <div className="Questionaire">
            {/* Switch for turning Location Tracking On/Off */}
            <Form>
            <div className="Overlay-placement">
            <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                <h2 className="Section-Title">Location Tracking</h2>
            </OverlayTrigger>
            </div>
            <Form.Check 
                custom
                type="switch"
                id="custom-switch"
                // label="Location Tracking"
                defaultChecked = {data2}
                onChange = {toggleData2}
            />
            </Form> 
            {/* Slider for Location Tracking Precision */}
            <div className="Overlay-placement">
            <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                <h2 className="Section-Title">Location Tracking Precision</h2>
            </OverlayTrigger>
            </div>
            <div className="slider-div">
                <Form.Label >0 Mile Radius</Form.Label>
                <Form.Range  defaultValue={data} onChange={setData} disabled={!data2}/>
                <Form.Label className='specific-slider-label-padding'>1/2 Mile Radius</Form.Label>
            </div>

            {/* Options for Data Sharing */}
            <div className="Overlay-placement">
            <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
                <h2 className="Section-Title">Data Sharing</h2>
            </OverlayTrigger>
            </div>
            <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="No shared data"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        defaultChecked = {data3}
                        onChange = {handleInputChange3}//, reset4, reset5} 
                    />
                    <Form.Check
                        type="radio"
                        label="Data shared only with company"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        defaultChecked = {data4}
                        onChange = {handleInputChange4}//, reset3, reset5}
                    />
                    <Form.Check
                        type="radio"
                        label="Data shared with company and 3rd parties"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        defaultChecked = {data5}
                        onChange = {handleInputChange5}//, reset3, reset4}
                    />
                </Col>
            </Form.Group>
            
            <div className="save-button-div">
                <Button className="save-button" onClick = {handleSubmit}>Save Changes</Button>
            </div>
        </div>
    )
}
export default Questionaire;