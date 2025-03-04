import { useLocation } from "react-router-dom";
import "../css/CheckOut.css";

function CheckOut() {

  const location = useLocation();
  
  return (
    <>
      <div className="checkout-main-div">
        <div className="checkout-sub-div">
          <div className="line-0">
            <div className="line-0-row-1">
              1. Item Details
            </div>
            <div className="line-0-row-2">
              <div className="line-0-row-2-A">
                {location.state.val.item_name}
              </div>
              <div className="line-0-row-2-B">
                {location.state.val.item_price.match(/\d+/g)[0]}
              </div>
            </div>
            <div className="line-0-row-2">
              <div className="line-0-row-2-A">
                Quantity
              </div>
              <div className="line-0-row-2-B">
                {location.state.Ref1}
              </div>
            </div>
            <div className="line-0-row-2">
              <div className="line-0-row-2-A">
                Total (Rs.)
              </div>
              <div className="line-0-row-2-B">
                {eval(location.state.val.item_price.match(/\d+/g)[0] * location.state.Ref1)}
              </div>
            </div>
          </div>
          <div className="line-1">
            <div className="line-1-row-1">
              <div className="line-1-row-1-A">
                2. Address
              </div>

              <div className="line-1-row-1-B">
                Choose One
              </div>
            </div>

            <div className="row-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, error!
            </div>
          </div>

          <div className="line-2">
            <div className="line-2-row-1">
              3. Payment Method
            </div>

            <div className="row-2">
              <div className="radio-btn-div">
                <input className="radio-btn" id="phone-pay" type="radio" name="payment-method"/>
                <label htmlFor="phone-pay" className="radio-btn-label">Phone Pay</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="google-pay" type="radio" name="payment-method"/>
                <label htmlFor="google-pay" className="radio-btn-label">Google Pay</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="paytm" type="radio" name="payment-method"/>
                <label htmlFor="paytm" className="radio-btn-label">Paytm</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="net-banking" type="radio" name="payment-method"/>
                <label htmlFor="net-banking" className="radio-btn-label">Net Banking</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="emi" type="radio" name="payment-method"/>
                <label htmlFor="emi" className="radio-btn-label">EMI</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="card" type="radio" name="payment-method"/>
                <label htmlFor="card" className="radio-btn-label">Card</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="other-upi-apps" type="radio" name="payment-method"/>
                <label htmlFor="other-upi-apps" className="radio-btn-label">Other UPI Apps</label>
              </div>
              <div className="radio-btn-div">
                <input className="radio-btn" id="cash-on-delivery" type="radio" name="payment-method"/>
                <label htmlFor="cash-on-delivery" className="radio-btn-label">Cash On Delivery</label>
              </div>
              <div onClick={() => UseThisPaymentMethod()} className="radio-btn-div-use-payment-method">
                Use This Payment Method
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;