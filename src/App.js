import React from "react";
import Navigation from './pages/Navigation';
import './styling/App.css';


// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Questionaire from "./pages/Questionaire";
import Confirmation from "./pages/Confirmation";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/*" element={<Navigation />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
