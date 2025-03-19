import "../css/Checkout.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";


function Checkout() {

  const [ initialVal, changeVal ] = useState();

  function setBackgroundColor(index) {
    changeVal(index);
  }

  const checkout_final_product_details = useLocation();

  return (
    <>
      <div className="checkout-parent-div mt-20 mb-8 flex justify-center items-center md:mt-25">
        <div className="border border-[#d5d3d3] h-auto pl-2 pr-2 w-[80vw] rounded-sm md:w-[20%]">
          <div className="mt-4 text-sm font-extrabold md:text-lg">
            1. Address
          </div>

          <div className="mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </div>

          <div className="mt-4 text-sm font-extrabold md:text-lg">
            2. Product Details
          </div>

          <div className="mt-2">
            <div>Price : {checkout_final_product_details.state.final_amount} Rs</div>
            {
              checkout_final_product_details.state.final_amount < 500 ? 
                <>
                  <div>Delivery Charge: 40 Rs</div>
                  <div className="text-[60%] font-bold text-[#ffc400]">Shop above Rs 500 to avoid Delivery Charges</div>
                </>
              : null
            }
            <div>Quantity : {checkout_final_product_details.state.product_quantity}</div>
            <div>{checkout_final_product_details.state.product_desc}</div>
          </div>

          <div className="mt-4 text-sm font-extrabold md:text-lg">
            3. Payment
          </div>

          <div className="mt-2 mb-2">
            <div onClick={() => setBackgroundColor(0)} className={`mt-1 border border-[#d5d3d380] pl-2 ${initialVal == 0 ? "bg-amber-100" : null}`} name="options">
              <li className="h-10 flex items-center">Phone Pay</li>
            </div>

            <div onClick={() => setBackgroundColor(1)} className={`mt-1 border border-[#d5d3d380] pl-2 ${initialVal == 1 ? "bg-amber-100" : null}`} name="options">
              <li className="h-10 flex items-center">Google Pay</li>
            </div>

            <div onClick={() => setBackgroundColor(2)} className={`mt-1 border border-[#d5d3d380] pl-2 ${initialVal == 2 ? "bg-amber-100" : null}`} name="options">
              <li className="h-10 flex items-center">Paytm</li>
            </div>

            <div onClick={() => setBackgroundColor(3)} className={`mt-1 border border-[#d5d3d380] pl-2 ${initialVal == 3 ? "bg-amber-100" : null}`} name="options">
              <li className="h-10 flex items-center">Net Bank</li>
            </div>

            <div onClick={() => setBackgroundColor(4)} className={`mt-1 border border-[#d5d3d380] pl-2 ${initialVal == 4 ? "bg-amber-100" : null}`} name="options">
              <li className="h-10 flex items-center">Credit Card</li>
            </div>

            <div onClick={() => setBackgroundColor(5)} className={`mt-1 border border-[#d5d3d380] pl-2 ${initialVal == 5 ? "bg-amber-100" : null}`} name="options">
              <li className="h-10 flex items-center">COD (Cash On Delivery)</li>
            </div>

            <div className="mt-1 pl-2 bg-amber-400">
              <li className="h-10 flex items-center justify-center">Pay</li>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;