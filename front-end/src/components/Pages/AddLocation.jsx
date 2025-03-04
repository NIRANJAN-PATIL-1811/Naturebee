
import "../css/AddLocation.css";
import { useRef, useState } from "react";
import axios from "axios";


function AddLocation() {

  const numberRegex = /\d/;

  const [ intialVal, changeVal ] = useState();

  const city = useRef();
  const state_province_region = useRef();
  const postal_zip_code = useRef();
  const landmark = useRef();
  const phone_number = useRef();


  async function saveData() {
        
    if (city.current.value == ""){
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
    else if (numberRegex.test(landmark.current.value)){
      changeVal("Please Enter Valid Landmark");
    }
    else if (phone_number.current.value == ""){
      changeVal("Please Enter Phone Number");
    }
    else if (phone_number.current.value.length < 10 || phone_number.current.value.length > 10) {
      changeVal("Please Enter Valid Phone Number");
    }
    else {

      const userData = {
        city : city.current.value,
        state_province_region : state_province_region.current.value,
        postal_zip_code : postal_zip_code.current.value,
        landmark : landmark.current.value,
        phone_number : phone_number.current.value,
      }
      
      try {
        await axios.post("http://localhost:8000/post/user_registration", userData)
        .then((res) => (res.data.msg ? changeVal("Email alredy exists!") : changeVal("Success!")))
      }
      catch (error) {
        console.log(error);
      }
      changeVal('');

    }
    
  }

  return (
    <>
      <form>
        <div className="add-location-input-div">
          <input ref={city} className="add-location-input" type="text" placeholder="City" required />
        </div>
        <div className="add-location-input-div">
          <input ref={state_province_region} className="add-location-input" type="text" placeholder="State/Province/Region" />
        </div>
        <div className="add-location-input-div">
          <input ref={postal_zip_code} className="add-location-input" type="text" placeholder="Postal/Zip Code" />
        </div>
        <div className="add-location-input-div">
          <input ref={landmark} className="add-location-input" type="text" placeholder="Landmark" />
        </div>
        <div className="add-location-input-div">
          <input ref={phone_number} className="add-location-input" type="text" placeholder="Phone Number" />
        </div>
        <div className="add-location-input-btn-div">
          <div onClick={() => saveData()} className="add-location-btn">
            Add Location
          </div>
          <div className="add-register-error-line">
            {
              intialVal != "" ? <>{intialVal}</> : null
            }
          </div>
        </div>
      </form>
    </>
  );
}

export default AddLocation;