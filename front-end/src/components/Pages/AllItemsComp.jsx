import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { IoStar } from "react-icons/io5";


function AllItemsComp({ AllItems }) {
  const Ref1 = useRef();

  const nav1 = useNavigate();

  function checkName(val) {
    for(let i = 0; i < Object(AllItems.AllItems.length); i++){
      if (Object(AllItems.AllItems[i].item_image) == val){
        changeVal(i);
      }
    }
  }

  function buyItem(val) {
    nav1('/checkout', {state : {val : Object(AllItems.AllItems[val]), Ref1 : Ref1.current.value}});
  }

  const [ initialVal, changeVal ] = useState(Math.ceil(Math.random(1)*10));

  const NewAllItems = Object(AllItems.AllItems).filter((_, item) => (Object(AllItems.AllItems[item]) != Object(AllItems.AllItems[initialVal])));
  // const NewAllItems = Object.entries(AllItems).filter((_, item) => (AllItems[item] != AllItems[initialVal]));
  // const NewAllItems = Object.entries(AllItems[1]);
  // console.log(NewAllItems);


  return (
    <>
      <div className="main-div">
        <div className="main-div-first-line">
          <div className="first-div">
            <img className="fresh-div" src={Object(AllItems.AllItems[initialVal].item_image)} alt="" />
          </div>

          <div className="second-div">
            <div className="item-name">
              { Object(AllItems.AllItems[initialVal].item_name) }
            </div>
            <div className="item-description">
              { Object(AllItems.AllItems[initialVal].item_description)}
            </div>
            <div className="item-discount">
              <span className="item-discount-span">{ Object(AllItems.AllItems[initialVal].item_discount)}</span>
            </div>
            <div className="item-price">
              { Object(AllItems.AllItems[initialVal].item_price)}
              <div className="quantity">
                x
              </div>
              <div>
                <input ref={Ref1} className="item-price-mul" type="number" defaultValue={1}/>
              </div>
            </div>
            <div className="item-rating">
              <div><IoStar/></div>
              <div>{ Object(AllItems.AllItems[initialVal].item_rating) }</div>
            </div>
            <div className="btns">
              <div className="buy-btn" onClick={() => buyItem(initialVal)}>
                Buy
              </div>
              <div className="add-to-cart-btn">
                Add to Cart
              </div>
            </div>
          </div>
        </div>

        <div className="main-div-second-line">
          <div className="main-div-second-line-headline">
            What other items do customers buy after viewing this item?
          </div>
          
          <div className="main-div-second-line-second-div">
            {
              NewAllItems.map((item, index) => (
                <div key={index} onClick={() => checkName(item.item_image)}>
                  <img className="main-div-second-line-img" src={`${item.item_image}`} alt="" />
                  <div className="main-div-second-line-img-text1">
                    {
                      item.item_name
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default AllItemsComp;