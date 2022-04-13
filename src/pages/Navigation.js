import React from "react";
import Confirmation from "./Confirmation";
import Questionaire from "./Questionaire";
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Navigation.css";


export default function Navigation(){
const [data, setData] = useInputState(20);
const [data2, toggleData2] = useToggleState(true);
const [data3, toggleData3, reset3] = useToggleState(false);
const [data4, toggleData4, reset4] = useToggleState(false);
const [data5, toggleData5, reset5] = useToggleState(false);
const [data6, toggleData6] = useToggleState(true);
const handleInputChange3 = (e) => { reset4(); reset5(); toggleData3();}
const handleInputChange4 = (e) => { reset3(); reset5(); toggleData4();}
const handleInputChange5 = (e) => { reset3(); reset4(); toggleData5();}

// const callBack = () => { 

// };
    return (
        <div>
            <h1><Link className="title-settings"to="/Settings">Settings</Link></h1>
            <Routes>
            <Route
                path="/"
                element={<Navigate to="/Settings" />}
            />
                <Route path="/Settings" 
                element={<Questionaire
                    handleInputChange3={handleInputChange3} handleInputChange4={handleInputChange4} handleInputChange5={handleInputChange5}
                    data={data} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}
                    toggleData2={toggleData2} toggleData6={toggleData6} setData={setData}
                />}/>
                <Route path="/Confirmation" element={<Confirmation />}/>
            </Routes>
            <Outlet />
        </div>
        );
}

