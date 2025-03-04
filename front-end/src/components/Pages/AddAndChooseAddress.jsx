import "../css/AddAndChooseAddress.css";
import { useState } from "react";
import AddNewAddress from "./AddNewAddress.jsx";
import ChooseOne from "./ChooseOne";


function AddAndChooseAddress({ changeCheckAddVal }) {

  const [ initialAddNewAddress, changeAddNewAddress ] = useState(true);

  const [ initialChooseOne, changeChooseOne ] = useState(false);

  function addNewAddress() {
    changeAddNewAddress(true);
    changeChooseOne(false);
  }

  function chooseOne() {
    changeAddNewAddress(false);
    changeChooseOne(true);
  }


  return (
    <>
    <div className="add-and-choose-address-parent-div">
      <div className="add-and-choose-address-main-div">
        <div onClick={() => addNewAddress()} className="add-and-choose-address-main-div-A">
          Add New Address
        </div>

        <div onClick={() => chooseOne()} className="add-and-choose-address-main-div-A">
          Choose One
        </div>
      </div>

      {
        initialAddNewAddress ? <AddNewAddress changeCheckAddVal={changeCheckAddVal} /> : <ChooseOne/>
      }
    </div>
    </>
  );
}

export default AddAndChooseAddress;