import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Shop_by_brands({images1}) {
  const [initialVal, changeVal] = useState(0);

  function filterFun(index) {
    changeVal(index);
  }

  const myRef = useRef();
  const checkoutLocation = useNavigate();

  function buybtn() {
    const final_amount = eval(myRef.current.value * images1[initialVal].price);
    const product_desc = images1[initialVal].desc;

    checkoutLocation("/checkout", { 
      state: { 
          final_amount: final_amount, 
          product_desc: product_desc, 
          product_quantity: myRef.current.value 
        }
      }
    );
  }

  return (
    <>
      <div className="nutritious-parent-div h-full w-full mt-20 md:mb-10 md:relative md:top-10">

        {/* Main Image Section */}
        <div className="child-A h-auto mt-10 mb-10 w-full flex justify-center items-center md:h-auto">
          <div className="h-full w-[60%] md:h-auto md:w-[40%]">
            <div className="main-img-div overflow-hidden md:h-[46.7vh] md:w-[17vw]">
              <img className="h-full w-full" src={images1[initialVal].img} alt="" />
            </div>
          </div>
        </div>

        {/* Parent div for correct stacking order on PC */}
        <div className="flex flex-col-reverse md:absolute md:top-0 md:left-[51%] md:w-[19%] md:flex md:flex-col md:gap-4">

          {/* First Div (More Info) */}
          <div className="child-D mt-10">
            <div className="child-D-child-A pl-5 font-extrabold md:hidden">More Info</div>
            <div className="child-D-child-B h-auto w-full flex justify-center mt-1">
              <div className="more-info h-auto w-[90%] md:w-full md:text-2xl md:font-bold">
                {images1[initialVal].desc}
              </div>
            </div>

            <div className="mt-2 pl-5 md:pl-0">
            <div className="text-sm font-extrabold">Nutritional Values</div>
              <div>Calories: {images1[initialVal].nutrition.calories}</div>
              <div>Protein: {images1[initialVal].nutrition.protein}</div>
              <div>Carbohydrates: {images1[initialVal].nutrition.carbohydrates}</div>
              <div>Fiber: {images1[initialVal].nutrition.fiber}</div>
              <div>Fat: {images1[initialVal].nutrition.fat}</div>
            </div>
          </div>

          {/* Second Div (Quantity & Buy Button) */}
          <div className="child-B flex justify-center items-center md:w-full">
            <div className="child-B-child-A w-[70%] md:w-[100%]">
              
              {/* Quantity Input */}
              <div className="quantity-div flex items-center mb-2">
                <label htmlFor="quantity-div-child">Quantity: </label>
                <div className="quantity-div-child border w-[20%] ml-2 border-[#d5d3d380] flex justify-center items-center md:w-[20%]">
                  <input ref={myRef} className="quantity w-[90%] outline-none" type="number" defaultValue={1} min={1} />
                </div>
              </div>

              {/* Price */}
              <div className="price-div flex mb-2">
                <div className="price mr-2">Price:</div>
                {images1[initialVal].price} Rs/kg
              </div>

              {/* Buy Button */}
              <div onClick={() => buybtn()} className="buy-btn flex justify-center items-center rounded-2xl bg-amber-400 w-[100%] h-[5vh] text-[4vw] sm:text-[3vw] md:text-[1vw]">
                Buy
              </div>

              {/* Add to Cart Button */}
              <div className="add-to-cart-btn mt-2 flex justify-center items-center rounded-2xl bg-[#ffe204] h-[5vh] text-[4vw] sm:text-[3vw] md:text-[1vw]">
                Add To Cart
              </div>

            </div>
          </div>

        </div>

        {/* Suggested Products Section */}
        <div className="child-C mt-7 w-[100%]">
          <div className="child-C-child-A pl-5 font-extrabold md:pl-[15%] md:text-2xl md:mb-2">People also Like</div>

          <div className="child-C-child-B h-auto mb-2 flex justify-center items-center">
            <div className="child-C-child-B-child-A h-[90%] w-[70%] flex items-center gap-20 flex-wrap md:gap- md:mb-8">
              {images1.map((item, index) =>
                index === initialVal ? null : (
                  <div key={index} onClick={() => filterFun(index)} className="nutritious-suggested-for-you-img-desc-div h-[96%] w-[40%] mb-2 flex-shrink-0 border border-[#d5d3d380] md:h-[35vh] md:w-[10vw]">
                    <div className="flex justify-center items-center h-[84%] w-[100%] md:h-[80%] md:w-auto">
                      <div className="flex justify-center items-center h-[90%] w-[100%]">
                        <img className="h-[95%] w-[80%]" src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="img-desc text-[3vw] flex justify-center items-center md:text-[100%]">
                      <div>Rs. {item.price}</div>
                      <div className="ml-2">{item.quantity}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Shop_by_brands;
