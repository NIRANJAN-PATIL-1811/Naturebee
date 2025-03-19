import "../css/Main_Course.css";
import images from "./item-1-images.json";
import images2 from "./item-2-images.json";
import images3 from "./sale-images.json";
import images4 from "./choice-images.json";

import disc_strip from "/strip_pc_flat75/Stripes_PC_flat75.jpg";

import { Link } from "react-router-dom";


function Main_Course() {

  return (
    <>
      <div className="parent-div">

        <div className="first-div mt-20 h-[8.2vh] w-full flex justify-center items-center sm:h-[15vh] md:h-[20vh] md:mt-30 lg:h-[30vh] md:w-full">

          <div className="first-child-div h-[100%] w-[98%] rounded-[1vh] flex overflow-hidden md:h-[100%] md:w-[98%]">

            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img1.jpg" alt="" />
            </div>

            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img2.jpg" alt="" />
            </div>

            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img3.jpg" alt="" />
            </div>
            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img4.jpg" alt="" />
            </div>
            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img5.jpg" alt="" />
            </div>
            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img6.jpg" alt="" />
            </div>
            <div className="first-child-div-A h-full w-full flex-shrink-0" >
              <img className="h-full w-full object-cover" src="/first_slide/img7.jpg" alt="" />
            </div>
          </div>

        </div>

        <div className="second-div mt-3">

          <div className="second-div-A ml-5 mb-2 font-extrabold md:ml-[8vw] md:text-2xl">
            Your Stores
          </div>

          <div className="second-div-B h-[20vh] flex justify-center items-center md:h-[25vh]">
            <div className="second-child-one h-[95%] w-[90%] overflow-x-scroll overflow-y-hidden flex gap-2 md:h-[84%] md:w-[84%]">
              {
                images.map((item, index) => 
                  <Link key={index} to={item.category}>
                    <div className="second-child-content-div h-[100%] w-[100%]">

                      <div className="second-child-content-img-div h-[60%] w-[40vw] md:w-[12vw] md:h-[14.5vh]">
                        <img className='h-[100%] w-[100%]' src={item.img} alt="" />
                      </div>

                      <div className="second-child-content-desc-div h-[39.9%] text-sm bg-[#d5d3d320]">
                        {item.desc}
                      </div>

                    </div>
                  </Link>
                )
              }

            </div>
          </div>
        </div>

        <div className="third-div mt-3">
          <div className="third-A ml-5 mb-2 font-extrabold md:ml-[8vw] md:text-2xl">
            Shop By Brands
          </div>

          <div className="third-div-B h-[10vh] flex justify-center items-center md:h-[25vh]">
            <div className="third-child-second h-[95%] w-[84%] overflow-x-scroll overflow-y-hidden flex gap-6 md:h-[84%]">
              {
                images2.map((item, index) => 
                  <Link to={item.category}>
                    <div key={index} className="third-child-content-div h-[100%] w-[100%]">
                      <div className="third-child-content-img-div h-[100%] w-[30vw] border border-[#d5d3d3b2] rounded-2xl flex justify-center items-center md:w-[12vw] md:h-[14.5vh]">
                        <img className='h-[70%] w-[70%]' src={item.img} alt="" />
                      </div>
                    </div>
                  </Link>
                )
              }
            </div>
          </div>
        </div>


        <div className="mt-[2vh] w-full mb-[2vh] md:ml-[8vw] md:w-[84%] md:text-2xl">
          <img className="h-[6vh] w-full md:h-[18vh] md:w-[100%]" src={disc_strip} alt="" />
        </div>


        <div className="sales-div mt-3">
          <div className="sales-A ml-5 mb-2 font-extrabold md:ml-[8vw] md:text-2xl">
            Deal Zone
          </div>

          <div className="sales-B h-[107vh] flex justify-center items-center md:h-[70vh]">

            <div className="third-child-second h-[100%] w-[90%] flex flex-wrap gap-10 justify-center items-center md:h-[95%]">
              {
                images3.map((item, index) => (
                  <div key={index} className="third-child-content-div h-[23vh] w-[25%] md:w-[12vw] md:h-[31vh] justify-center">
                    
                    <div className='bg-amber-50 h-[10vh] md:h-[20vh]'>

                      <div className="third-child-content-img-div rounded-2xl flex justify-center items-center w-full h-full">
                        <img className="h-[100%] w-[100%] object-contain" src={item.img} alt="" />
                      </div>

                      <div className="third-child-content-div text-[3vw] md:text-[1vw]">
                        {
                          item.desc
                        }
                      </div>

                      <div className="third-child-content-div text-[3vw] md:text-sm text-red-600">
                        {
                          item.discound
                        } Off
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>

          </div>

        </div>


        <div className="customer-choice mt-3">
          
          <div className="customer-choice-A ml-5 mb-2 font-extrabold md:ml-[8vw] md:text-2xl">
            Customer's Choice
          </div>

          <div className="custome-choice-B h-[100vh] flex justify-center items-center md:h-[70vh]">

            <div className="third-child-second h-[100%] w-[90%] flex flex-wrap gap-10 justify-center items-center md:h-[95%]">
              {
                images4.map((item, index) => (
                  <div key={index} className="third-child-content-div h-[19vh] w-[25%] md:w-[12vw] md:h-[31vh] justify-center">
                    
                    <div className='bg-amber-50 h-[10vh] md:h-[20vh]'>

                      <div className="third-child-content-img-div rounded-2xl flex justify-center items-center w-full h-full">
                        <img className="h-[100%] w-[100%] object-contain" src={item.img} alt="" />
                      </div>

                      <div className="third-child-content-div text-[3vw] md:text-[1vw]">
                        {
                          item.desc
                        }
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>

          </div>

        </div>

      </div>
    </>
  );
}


export default Main_Course;