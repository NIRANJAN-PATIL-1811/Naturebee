function Footer() {
  return (
    <>
      <div className="parent-div">

        <div className="child-div-A bg-[#0a4628] w-full py-[1vh] hidden md:block">
          
          <div className="flex justify-center text-[2vw] gap-8 md:text-[0.8vw] md:gap-20 text-amber-50">
            
            <div className="first">
              Get to know
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]' >About Naturebee</div>
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Career</div>
            </div>
            
            <div className="second">
              Connect with us
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Facebook</div>
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Tweeter</div>
            </div>

            <div className="third">
              Make Money with us
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Sell on NatureBee</div>
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Supply to NatureBee</div>
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Become an Affilliate</div>
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Advertise Your Products</div>
            </div>

            <div className="fourth">
              Let us help you
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Your Account</div>
              <div className='text-[1.5vw] hover:text-amber-500 hover:cursor-pointer md:text-[0.7vw]'>Help</div>
            </div>

          </div>

        </div>

        <div className="child-div-B bg-gray-900 flex justify-center border-t-2 border-t-blue-50 w-full py-[1vh]">
          <img className='h-[4vh]' src="/naturebee.jpeg" alt="" />
        </div>

      </div>
    </>
  );
}


export default Footer;