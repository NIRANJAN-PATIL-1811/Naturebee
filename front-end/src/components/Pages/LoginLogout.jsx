import "../css/LoginLogout.css";


function LoginLogout({ changeLoginVal }) {


  function logOutFun() {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("first_name");
    window.localStorage.removeItem("postal_zip_code");
    window.localStorage.removeItem("email");
    changeLoginVal(false);
    window.location.reload();
  }
  return (
    <>
      <div onClick={() => logOutFun()}  className="loginlogout-main-div">
        <div className="loginlogout-sub-div">
          Confirm
        </div>
      </div>
    </>
  );
}

export default LoginLogout;