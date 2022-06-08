import logo from './logo.svg';
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import './App.css';

function App() {
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const setLoad = (value) => {
    setLoading(value);
  }

 const handleAlert = (flag, msg) => {
   if (flag === "success") {
     setAlert({
       msg: msg,
       d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z",
       type: flag,
     });

     setTimeout(() => {
       setAlert(null);
     }, 1800);
   } else {
     setAlert({
       msg: msg,
       d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
       type: flag,
     });

     setTimeout(() => {
       setAlert(null);
     }, 1800);
   }
 };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp alert={alert} alertFunc={handleAlert} loading={loading} setLoad={setLoad}/>}></Route>
        <Route exact path="/sign-in" element={<SignIn alert={alert} alertFunc={handleAlert} loading={loading} setLoad={setLoad}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
