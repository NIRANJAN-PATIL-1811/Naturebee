import "../css/Main_Course.css";
import { useContext } from "react";
import { Context1 } from "../../Mycontext.jsx";
import { Link, useNavigate } from "react-router-dom";





function Main_Course() {

  const nav1 = useNavigate();

  const { getValue } = useContext(Context1);

  const array1 = [];

  for (let i = 1; i < 8; i++){
    array1.push(i);
  }

  function getData(val) {
    switch (val) {
      case 1:
        nav1('fresh produce');
        break;

      case 2:
        nav1('meat & poultry');
        break;

      case 3:
        nav1('dairy products');
        break;
    
      default:
        break;
    }
  }


  return (
    <>
      <div className="main-course-div">
        <div className="main-2">
          <img src="./img1.jpg" alt="" />
          <img src="./img2.jpg" alt="" />
          <img src="./img3.jpg" alt="" />
        </div>
      </div>

      <div className="main-3">
        <div className="shop-by-category">
          Shop By Category
        </div>

        <div className="shop-by-category-items">
          {
            Object.values(getValue).map((item, index) => (
              <Link key={index} className="link-div" to={item}>
                <div className="item-div">
                  <div className="item-name-div">
                    {item}
                  </div>
                  <div className="item-img-div">
                    <img className="item-img" src={`./item-1/item${index + 1}.jpg`} />
                    <div className="item-offer">
                      Up to { Math.ceil(Math.random(1) * 40) }% OFF
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
          
        </div>
      </div>

      <div className="main-4">
        <div className="main-4-sub-1">
          More Top Picks For You
        </div>
        <div className="main-4-sub-2">
          {
            array1.map((item, index) => (
              <div onClick={() => getData(index + 1)} key={index}>
                <img className="main-4-item-img" src={`./item-2/item${item}.jpg`} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Main_Course;