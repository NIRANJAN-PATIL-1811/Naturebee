import { useRef, useState } from "react";
import axios from "axios";

import "../css/AddNewAddress.css";



function AddNewAddress({ changeCheckAddVal }) {

  const numberRegex = /\d/;

  const city = useRef();
  const state_province_region = useRef();
  const postal_zip_code = useRef();
  const landmark = useRef();

  const [ initialVal, changeVal ] = useState();

  async function sendData() {
    if (city.current.value == "") {
      changeVal("Please Enter City");
    }
    else if (numberRegex.test(city.current.value)) {
      changeVal("Please Enter Valid City");
    }
    else if (state_province_region.current.value == "") {
      changeVal("Please Enter State/Province/Region");
    }
    else if (numberRegex.test(state_province_region.current.value)) {
      changeVal("Please Enter Valid State/Province/Region");
    }
    else if (postal_zip_code.current.value == "") {
      changeVal("Please Enter Postal/Zip Code");
    }
    else if (!numberRegex.test(postal_zip_code.current.value) || postal_zip_code.current.value.length < 6 || postal_zip_code.current.value.length > 6) {
      changeVal("Please Enter Valid Postal/Zip Code");
    }
    else if (landmark.current.value == "" ) {
      changeVal("Please Enter Landmark");
    }
    else {
      
      changeVal("");

      const user_Address = {
        city : city.current.value,
        state_province_region : state_province_region.current.value,
        postal_zip_code : postal_zip_code.current.value,
        landmark : landmark.current.value,
        email : window.localStorage.getItem("email")
      };

      try {
        await axios.post("http://localhost:8000/post/user_registration/user_address", user_Address)
        .then((res) => changeVal(res.data.msg))
        .catch((error) => console.log(error));

        setTimeout(() => {
          changeVal("");
          changeCheckAddVal(false)
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
        <div className="addNewAddress-parent-div">

          <div className="addNewAddress-main-div">

            <div className="addNewAddress-input-div">
              <input ref={city} className="addNewAddress-input" type="text" placeholder="City"/>
            </div>
            <div className="addNewAddress-input-div">
              <input ref={state_province_region} className="addNewAddress-input" type="text" placeholder="State/Province/Region"/>
            </div>
            <div className="addNewAddress-input-div">
              <input ref={postal_zip_code} className="addNewAddress-input" type="text" placeholder="Postal/Zip Code"/>
            </div>
            <div className="addNewAddress-input-div">
              <input ref={landmark} className="addNewAddress-input" type="text" placeholder="Landmark"/>
            </div>
            <div onClick={() => sendData()} className="addNewAddress-btn-div">
              <div className="addNewAddress-btn-div-A">
                Add
              </div>

              <div className="addNewAddress-btn-div-B">
                { initialVal ? <div className="addNewAddress-success-line">Success</div> : <div className="addNewAddress-error-line">{initialVal}</div>}
              </div>
            </div>

          </div>

        </div>
      </form>
    </>
  );
}

export default AddNewAddress;