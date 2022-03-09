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
            Description of what Location Tracking does and what information is shared.
          </Popover.Body>
        </Popover>
    );
    const popover2 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Sample 2</Popover.Header>
          <Popover.Body>
            Description of what Sample 2 does and what information is shared.
          </Popover.Body>
        </Popover>
    );
    const popover3 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Sample 3</Popover.Header>
          <Popover.Body>
            Description of what Sample 3 does and what information is shared.
          </Popover.Body>
        </Popover>
    );

    return (
        <div className="Questionaire">
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
            <div className="Overlay-placement">
            <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                <h2 className="Section-Title">Sample 2</h2>
            </OverlayTrigger>
            </div>
            <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="Option 1"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        defaultChecked = {data3}
                        onChange = {handleInputChange3}//, reset4, reset5}
                    />
                    <Form.Check
                        type="radio"
                        label="Option 2"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        defaultChecked = {data4}
                        onChange = {handleInputChange4}//, reset3, reset5}
                    />
                    <Form.Check
                        type="radio"
                        label="Option 3"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        defaultChecked = {data5}
                        onChange = {handleInputChange5}//, reset3, reset4}
                    />
                </Col>
            </Form.Group>
            
            <div className="Overlay-placement">
            <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
                <h2 className="Section-Title">Sample 3</h2>
            </OverlayTrigger>
            </div>
            <div className="slider-div">
                <Form.Label >0</Form.Label>
                <Form.Range  defaultValue={data} onChange={setData}/>
                <Form.Label >100</Form.Label>
            </div>
            <div className="save-button-div">
                <Button className="save-button" onClick = {handleSubmit}>Save Changes</Button>
            </div>
        </div>
    )
}
export default Questionaire;