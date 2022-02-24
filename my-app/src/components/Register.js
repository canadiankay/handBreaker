
import "./register.css"
const Register = () => {
  return (
  <div className="reg-page">

      <div class="reg-box">
    <form>
      <h2>Registration</h2>
      <div className="user-box">
        <input
          type="text"
          name=""
          required=""/>
        <label>Email:</label>
      </div>

      <div className="user-box">
        <input
          type="password"
          name=""
          required=""/>
        <label>Password:</label>
      </div>

      <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button input="submit" type="button" >SUBMIT</button>
          </a>

    </form>
    
    
    </div>
    </div>



  );
};

export default Register;