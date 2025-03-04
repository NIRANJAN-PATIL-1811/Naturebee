import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

import "../css/Login.css";
import LoginLogin from "./LoginLogin.jsx";
import AddRegister from "./AddRegister.jsx";
import LoginLogout from "./LoginLogout.jsx";


function Addlogin({ changeLoginVal }) {

  const [ initialDefaultLoginVal, changeDefaultLoginVal] = useState(true);
  const [ initialRegisterVal, changeRegisterVal ] = useState(false);
  const [ initialLogoutVal, changeLogoutVal ] = useState(false);

  function checkClickA() {
    changeDefaultLoginVal(true);
    changeRegisterVal(false);
    changeLogoutVal(false);
  }

  function checkClickB() {
    changeDefaultLoginVal(false);
    changeRegisterVal(true);
    changeLogoutVal(false);
  }

  function checkClickC() {
    changeDefaultLoginVal(false);
    changeRegisterVal(false);
    changeLogoutVal(true);
  }

  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  
  return (
    <>
      <div className="login-parent-div">
        <div className="login-main-div">

          <div className="login-sub-div">
            <div className="login-location">
              <div onClick={() => checkClickA()} className="login-sub-login-btn-div">
                Login
              </div>
              { isLoggedIn ? <div onClick={() => checkClickC()} className="login-sub-add-location-details">Logout</div> : <div onClick={() => checkClickB()} className="login-sub-register-btn-div">Register</div> }
              
              <div onClick={() => changeLoginVal(false)} className="login-close-div"><IoIosCloseCircleOutline/></div>
            </div>
            
            {
              initialDefaultLoginVal ? <LoginLogin changeLoginVal={changeLoginVal} /> : initialRegisterVal ? <AddRegister changeCheckAddVal={changeLoginVal} /> : initialLogoutVal ? <LoginLogout changeLoginVal={changeLoginVal} /> : null
            }
          </div>

        </div>
      </div>
    </>
  );
}

export default Addlogin;