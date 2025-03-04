import "../css/LoginLogin.css";
// import { FcGoogle } from "react-icons/fc";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { Context2 } from "../../Mycontext2";



function LoginLogin({ changeLoginVal }) {
  
  const [ initialVal, changeVal ] = useState("");

  const { changeAddressVal, changeUserName } = useContext(Context2);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const email = useRef();
  const password = useRef();

  // const [ initialLoginVal, changeLogin ] = useState(false);

  // window.localStorage.setItem("isLoggedIn", initialLoginVal);

  async function postLoginInfo() {
    const user_data = {
      email : email.current.value,
      password : password.current.value
    };
    await axios.post("http://localhost:8000/post/user_registration/checklogin", user_data)
    .then((res) => (res.data.msg ? [ 
      window.localStorage.setItem("isLoggedIn", true), 
      window.localStorage.setItem("first_name", res.data.first_name), 
      window.localStorage.setItem("postal_zip_code", res.data.postal_zip_code),
      window.localStorage.setItem("email", res.data.email),
      changeVal("Success!"), 
      changeAddressVal(res.data.postal_zip_code), 
      changeUserName(res.data.first_name) ] : 
      changeVal("Email or Password may be wrong!")))
    .catch((err) => console.log(err));

    setTimeout(() => {
      changeVal("");
      changeLoginVal(false);
    }, 5000);
  }

  const [ initialEyeVal, changeEyeVal ] = useState(false);

  function desideEye() {
    if (initialEyeVal == false) {
      changeEyeVal(true);
    }
    else {
      changeEyeVal(false);
    }
  }

  function checkLogin() {
    if (email.current.value == ""){
      changeVal("Please Enter Email");
    }
    else if (!emailRegex.test(email.current.value)) {
      changeVal("Please Enter Valid Email");
    }
    else if (password.current.value == "") {
      changeVal("Please Enter Password");
    }
    else {
      postLoginInfo();
    }
  }
  return (
    <>
      <form>
        <div className="add-login-input-div">
          <input ref={email} className="add-login-input" type="text" placeholder="Email"/>
        </div>

        <div className="add-login-input-div">
          <input ref={password} className="add-login-input" type={initialEyeVal ? "text" : "password"} placeholder="Password" />
        </div>

        <div className="add-login-input-div-B">
          <div onClick={() => checkLogin()} className="add-login-btn">
            Login
          </div>
          <div className="eye" onClick={() => desideEye()}>eye</div>
          {/* <div className="add-login-google">
            <FcGoogle/>
          </div> */}
          <div className="add-login-error-line">
            {initialVal}
          </div>

        </div>
      </form>
    </>
  );
}

export default LoginLogin;