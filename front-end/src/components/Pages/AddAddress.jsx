import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

import "../css/AddAddress.css";

import AddRegister from "./AddRegister.jsx";
// import AddLocation from "./AddLocation.jsx"; 


import { FcGoogle } from "react-icons/fc";
import AddAndChooseAddress from "./AddAndChooseAddress.jsx";


function AddAddress({ changeCheckAddVal }) {

  const [ initialRegisterVal, changeRegisterVal ] = useState(true);

  // const [ initialLocationVal, changeLocationVal ] = useState(false);

  function changeRegiValFun() {
    changeRegisterVal(true);
    // changeLocationVal(false);
  }

  // function changeAddLocaValFun() {
  //   changeRegisterVal(false);
  //   changeLocationVal(true);
  // }

  return (
    <>
      <div className="address-parent-div">
        <div className="address-main-div">

          <div className="address-sub-div">
            <div className="address-location">
              {/* <div onClick={() => changeRegiValFun()} className="address-sub-register-btn-div">
                Register
              </div> */}
              {/* <div onClick={() => changeAddLocaValFun()} className="address-sub-add-location-details">
                Add Location
              </div> */}
              <div onClick={() => changeCheckAddVal(false)} className="close-div"><IoIosCloseCircleOutline/></div>
            </div>
            
            { 
              window.localStorage.getItem("isLoggedIn") == null ? (initialRegisterVal ? <AddRegister changeCheckAddVal={changeCheckAddVal} /> : null) : <AddAndChooseAddress changeCheckAddVal={changeCheckAddVal} />
            }

            {/* { 
              initialRegisterVal ? <AddRegister/> : initialLocationVal ? <AddLocation/> : null
            } */}

            {/* {
              isAuthenticated ? <button onClick={() => logout()}>Log Out</button> : <button onClick={() => loginWithRedirect()}>Log In</button>
            } */}
          </div>

        </div>
      </div>
    </>
  );
}

export default AddAddress;