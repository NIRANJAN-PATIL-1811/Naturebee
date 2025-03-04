import "../css/Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";


import { Context1 } from "../../Mycontext.jsx";
import { Context2 } from "../../Mycontext2.jsx";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AddAddress from "./AddAddress.jsx";
import Login from "./Login.jsx";

function Navbar() {
  
  const { initialAddressVal } = useContext(Context2);

  const item_list = ['Fresh Produce', 'Dairy Products', 'Meat & Poultry ', 'Grains, Cereals & Pulses', 'Bakery & Baked Goods', 'Frozen Foods', 'Snacks & Beverages', 'Dry Fruits & Nuts', 'Oils & Condiments', 'Spices & Seasonings', 'Ready-to-Eat & Instant Foods', 'Baby Food & Essentials'];
  
  const { setValue } = useContext(Context1);

  useEffect(() => {
    setValue(item_list);
  }, []);

  const { initialUserName, changeAddressVal, changeUserName } = useContext(Context2);
  
  useEffect(() => {
    try {
      if (window.localStorage.getItem("first_name") == null) {
        changeAddressVal("Please enter your address to proceed with the order");
      }
      else {
        changeAddressVal(window.localStorage.getItem("postal_zip_code"));
        changeUserName(window.localStorage.getItem("first_name"));
      }
    }
    catch (error) {
      console.log(error);
    }
  }, []);

  const [ initialCheckAddVal, changeCheckAddVal ] = useState(false);

  const [ initialLoginVal, changeLoginVal ] = useState(false);

  

  return (
    <>
      <div className="navbar-main">
        <div className="logo-div">
          <img className="logo-img" src="naturebee.jpeg" alt="" />
          <div className="logo-line">naturebee.com</div>

          <div onClick={() => changeCheckAddVal(true)} className="address-div">
            <div className="address-div-A">
              <GrLocation/>
            </div>
            <div className="address-div-B">
              {initialAddressVal}
            </div>
          </div>

          <div>
            {
              initialCheckAddVal ? <AddAddress changeCheckAddVal={changeCheckAddVal}/> : null
            } 
          </div>
          

          <div className="search-bar">
            <input className="search-bar-input" type="text" />
            <div className="search-icon-div">
              <IoMdSearch/>
            </div>
          </div>

          <div className="cart-div">
            <div className="cart-sub-div">
              <BsCart/>
            </div>
          </div>

          <div>
            <div onClick={() => changeLoginVal(true)} className="account-div">
              <div className="account-sub-div">
                <RiAccountCircleFill/>
              </div>
            </div>

            <div className="user-name">
              {initialUserName}
            </div>
          </div>

          <div>
            {
              initialLoginVal ? <Login changeLoginVal={changeLoginVal} /> : null
            }
          </div>
          

        </div>

        <div className="second-line">
          {
            item_list.map((item, index) => (
              <div className="second-line-items" key={index}>
                {
                  <Link className="link-div" to={item}>{item}</Link>
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Navbar;