import "../css/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { useState } from "react";
import { Link } from "react-router-dom";


import { SlHome } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineAccountBalance } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";




function Navbar() {

  const [ open, changeVal ] = useState(false);

  return (
    <>
      <div className="parent-div flex items-center max-h-[7vh] border-b-0 border-b-cyan-900 shadow-md fixed top-0 left-0 right-0 bg-[white] z-50 w-full">

        <div className="child-div max-h-[5vh] flex items-center max-ml-[1vw] w-full">
          <div>
            <RxHamburgerMenu onClick={() => changeVal(!open)} className='max-text-2xl md:hidden max-ml-[1vw] ' />
          </div>
          <div className="name-div hidden md:flex md:max-ml-[1vw] md:max-text-2xl md:font-bold">
            <div className="logo-div">
              <img className='max-h-[4vh] mr-[1vw]' src="/naturebee.jpeg" alt="" />
            </div>
            <div>naturebee</div>
          </div>

          <div className="search-div flex justify-center border rounded-sm max-w-[75%] max-h-[80%] max-ml-[5%]">
            <input className='max-w-[95%] max-h-[100%] outline-none md:max-w-[98%]' type="text" placeholder="eg. fresh" />
          </div>

          <div className="account-div flex">
            <SlBasket className='max-text-3xl max-ml-[2vw]'/>
            <MdAccountCircle className='max-text-3xl max-ml-[3vw] md:max-ml-[1vw]' />          
          </div>
        </div>
      </div>

      <div className="mt-14 absolute top-0 z-50">
          {
            open ? 
            <>
              <div className="max-h-[100vh] max-w-[50vw] bg-white fixed shadow-2xl">
                <div className="w-70%">
                  
                  <Link to={'/'}>
                    <div onClick={() => changeVal(false)} className="border ml-2  max-w-[90%] mt-2 rounded-2xl">
                      <div className=" flex items-center ml-2">
                        <SlHome/>
                        <li className="flex items-center max-ml-[5%] max-h-10">Home</li>
                      </div>
                    </div>
                  </Link>

                  <div className="border ml-2  max-w-[90%] mt-2 rounded-2xl">
                    <div className=" flex items-center ml-2">
                      <VscAccount/>
                      <li className="flex items-center max-ml-[5%] max-h-10">Account</li>
                    </div>
                  </div>

                  <div className="border ml-2  max-w-[90%] mt-2 rounded-2xl">
                    <div className=" flex items-center ml-2">
                      <MdOutlineAccountBalance/>
                      <li className="flex items-center max-ml-[5%] max-h-10">Payments</li>
                    </div>
                  </div>

                  <div className="border ml-2  max-w-[90%] mt-2 rounded-2xl">
                    <div className=" flex items-center ml-2">
                      <SlBasket/>
                      <li className="flex items-center max-ml-[5%] max-h-10">Cart</li>
                    </div>
                  </div>

                  <div className="border ml-2  max-w-[90%] mt-2 rounded-2xl">
                    <div className=" flex items-center ml-2">
                      <CiLocationOn/>
                      <li className="flex items-center max-ml-[5%] max-h-10">Location</li>
                    </div>
                  </div>

                  <div className="border ml-2  max-w-[90%] mt-2 rounded-2xl">
                    <div className=" flex items-center ml-2">
                      <TbTruckDelivery/>
                      <li className="flex items-center max-ml-[5%] max-h-10">Orders</li>
                    </div>
                  </div>
                </div>
              </div>
            </> : null
          }
        </div>
    </>
  );
}

export default Navbar;