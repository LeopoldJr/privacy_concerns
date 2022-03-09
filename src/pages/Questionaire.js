import React from "react";
import {
    useNavigate
} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Col, Row, Form, Check } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styling/Questionaire.css';
// import FormCheck from 'react-bootstrap/FormCheck'
import useInputState from "../hooks/useInputState";
//   import { useNavigate } from "react-router-dom";

const Questionaire = ({ callBack, handleInputChange3, handleInputChange4, handleInputChange5, data, setData, data2, toggleData2, reset2, data3, toggleData3, reset3, data4, toggleData4, reset4, data5, toggleData5, reset5 }) => { //
    let navigate = useNavigate();
        
    // setData(idata);
    function handleSubmit(e) {
        // console.log(data)
        // callBack(data);
        // callBack(0);
        console.log(`${data3}, ${data4}, ${data5}`);
        navigate("/Confirmation");

    }
    function handleChange4(){
        if (data5) toggleData5();
        if (data3) toggleData3();
        toggleData4();

    }

    return (
        <div className="Questionaire">
            <Form>
                <h2 className="Section-Title">Location Tracking</h2>
            <Form.Check 
                custom
                type="switch"
                id="custom-switch"
                // label="Location Tracking"
                defaultChecked = {data2}
                onChange = {toggleData2}
            />
            </Form>
            {/* <fieldset> */}
            <h2 className="Section-Title">Driving Mode</h2>
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
            {/* </fieldset> */}
            
            <h2 className="Section-Title">Distance From Car In Front</h2>
            <div className="slider-div">
                <Form.Label >0</Form.Label>
                <Form.Range  defaultValue={data} onChange={setData}/>
                <Form.Label >100</Form.Label>
            </div>

            <Button className="save-button" onClick = {handleSubmit}>Save Changes</Button>
            {/* value={data} */}
        </div>
    )
}
export default Questionaire;