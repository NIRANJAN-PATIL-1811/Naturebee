
import "../css/AddRegister.css";
import { useRef, useState } from "react";
import axios from "axios";



function AddRegister({ changeCheckAddVal }) {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const numberRegex = /\d/;

  const [ intialVal, changeVal ] = useState();

  const first_name = useRef();
  const last_name = useRef();
  const city = useRef();
  const state_province_region = useRef();
  const postal_zip_code = useRef();
  const landmark = useRef();
  const phone_number = useRef();
  const email = useRef();
  const password = useRef();

  async function saveData() {

        
    if (first_name.current.value == ""){
      changeVal("Please Enter First Name");
    } 
    else if (numberRegex.test(first_name.current.value)) {
      changeVal("Please Enter Valid First Name");
    }
    else if (last_name.current.value == ""){
      changeVal("Please Enter Last Name");
    }
    else if (numberRegex.test(last_name.current.value)) {
      changeVal("Please Enter Valid Last Name");
    }
    else if (city.current.value == ""){
      changeVal("Please Enter City");
    }
    else if (numberRegex.test(city.current.value)) {
      changeVal("Please Enter Valid City");
    }
    else if (state_province_region.current.value == ""){
      changeVal("Please Enter State/Province/Region");
    }
    else if (numberRegex.test(state_province_region.current.value)) {
      changeVal("Please Enter Valid State/Province/Region");
    }
    else if (postal_zip_code.current.value == ""){
      changeVal("Please Enter Postal/Zip Code");
    }
    else if (!numberRegex.test(postal_zip_code.current.value) || postal_zip_code.current.value.length < 6 || postal_zip_code.current.value.length > 6) {
      changeVal("Please Enter Valid Postal/Zip Code");
    }
    else if (landmark.current.value == ""){
      changeVal("Please Enter Landmark");
    }
    else if (phone_number.current.value == ""){
      changeVal("Please Enter Phone Number");
    }
    else if (phone_number.current.value.length < 10 || phone_number.current.value.length > 10) {
      changeVal("Please Enter Valid Phone Number");
    }
    else if (email.current.value == ""){
      changeVal("Please Enter Email");
    }
    else if (!emailRegex.test(email.current.value)) {
      changeVal("Please Enter Valid Email");
    }
    else if (password.current.value == "") {
      changeVal("Please Enter Password");
    }
    else {
      changeVal('');

      const userData = {
        first_name : first_name.current.value,
        last_name : last_name.current.value,
        city : city.current.value,
        state_province_region : state_province_region.current.value,
        postal_zip_code : postal_zip_code.current.value,
        landmark : landmark.current.value,
        phone_number : phone_number.current.value,
        email : email.current.value,
        password : password.current.value
      }
      
      try {
        await axios.post("http://localhost:8000/post/user_registration/naturebee_register", userData)
        .then((res) => (res.data.msg ? changeVal("User Alredy Exists!") : changeVal("Success!")))
        setTimeout(() => {
          changeVal("");
          changeCheckAddVal(false);
        }, 5000);
      }
      catch (error) {
        console.log(error);
      }

      
    }
    
  }


  return (
    <>
      <form>
        <div className="add-register-input-div">
          <input ref={first_name} className="add-register-input" type="text" placeholder="First Name"/>
        </div>
        <div className="add-register-input-div">
          <input ref={last_name} className="add-register-input" type="text" placeholder="Last Name" />
        </div>
        <div className="add-register-input-div">
          <input ref={city} className="add-register-input" type="text" placeholder="City" />
        </div>
        <div className="add-register-input-div">
          <input ref={state_province_region} className="add-register-input" type="text" placeholder="State/Province/Region" />
        </div>
        <div className="add-register-input-div">
          <input ref={postal_zip_code} className="add-register-input" type="text" placeholder="Postal/Zip Code" />
        </div>
        <div className="add-register-input-div">
          <input ref={landmark} className="add-register-input" type="text" placeholder="Landmark" />
        </div>
        <div className="add-register-input-div">
          <input ref={phone_number} className="add-register-input" type="text" placeholder="Phone Number" />
        </div>
        <div className="add-register-input-div">
          <input ref={email} className="add-register-input" type="text" placeholder="Email" />
        </div>
        <div className="add-register-input-div">
          <input ref={password} className="add-register-input" type="password" placeholder="Password" />
        </div>
        <div className="add-register-input-btn-div">
          <div onClick={() => saveData()} className="add-register-btn">
            Register
          </div>
          {/* <div onClick={() => loginWithRedirect()} className="add-register-google">
            <FcGoogle/>
          </div>
          {
            isAuthenticated ? <div onClick={() => logout()}>Log Out</div> : null
          } */}
          
          <div className="add-register-error-line">
            {
              intialVal != "" ? <>{intialVal == 'Success!' ? <div className="add-register-success-line">{intialVal}</div> : intialVal}</> : null
            }
          </div>
        </div>
      </form>
    </>
  );
}

export default AddRegister;