
const Register = () => {
  return (
    <>
    <h1> CREATE AN ACCOUNT WITH MDN GAMES HERE:</h1>
    <form>
    <div>
        Username:
        <input
          type="text"
          placeholder="Username"/>
      </div>

      <div>
        Email:
        <input
          type="text"
          placeholder="Email"/>
      </div>

      <div>
        Password:
        <input
          type="password"
          placeholder="Password"/>
      </div>

      <button type="button" input="submit">
        Register
      </button>
    </form>
    
    
    </>



  );
};

export default Register;