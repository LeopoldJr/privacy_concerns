import React from "react";
import Confirmation from "./Confirmation";
import Questionaire from "./Questionaire";
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Navigation.css";


export default function Navigation(){
const [data, setData] = useInputState(20);
const [data2, toggleData2, reset2] = useToggleState(false);
const [data3, toggleData3, reset3] = useToggleState(false);
const [data4, toggleData4, reset4] = useToggleState(false);
const [data5, toggleData5, reset5] = useToggleState(false);
const handleInputChange3 = (e) => { reset4(); reset5(); toggleData3();}
const handleInputChange4 = (e) => { reset3(); reset5(); toggleData4();}
const handleInputChange5 = (e) => { reset3(); reset4(); toggleData5();}
// var data = 100;

const callBack = (val1) => { // the callback. Use a better name
    // toggleData2();
//   console.log(val1);
//   console.log(data);
//   console.log(`Navigation callback recieved val1:${val1}`);
//   data = val1;
    // data = val1;
    // var num = val1
//   setData(e);
//   console.log(data);
//   console.log(`Navigation var data:${data}`);
};
    return (
        <div>
            <h1><Link className="title-settings"to="/Settings">Settings</Link></h1>
            <Routes>
                <Route path="/Settings" 
                element={<Questionaire callBack={callBack} 
                    handleInputChange3={handleInputChange3} handleInputChange4={handleInputChange4} handleInputChange5={handleInputChange5}
                    data={data} setData={setData}
                    data2={data2} toggleData2={toggleData2} reset2={reset2}
                    data3={data3} toggleData3={toggleData3} reset3={reset3}
                    data4={data4} toggleData4={toggleData4} reset4={reset4}
                    data5={data5} toggleData5={toggleData5} reset5={reset5}
                />}/>
                <Route path="/Confirmation" element={<Confirmation />}/>
            </Routes>
            <Outlet />
        </div>
        );
}

