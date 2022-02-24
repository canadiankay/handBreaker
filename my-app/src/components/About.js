
import "./about.css"
const About = () => {
  const aboutPage = {
    position: "absolute",
    top: "60%",
    left: "50%",
    width: "500px",
    height:"700px",
    transform: "translate(-50%, -50%)",
    background: "rgba(0,0,0,.5)",
    boxSizing: "border-box",
    boxShadow: "0 15px 25px rgba(0,0,0,.6)",
    borderRadius: "10px",
  }

  const aboutStyle = {
    color: "orange",
    backgroundColor: "grey",
    fontFamily: "Helvetica",
    textAlign: "center",
    fontSize: "50px",
  }

  const eachDeveloperStyle = {
    width: "50%",
    height: "50px",
    color: "red",
    backgroundColor: "orange",
    fontFamily: "Helvetica",
    textAlign: "center",
    fontSize: "25px",
    margin: "30px 500px"
  }
  return (
    <div className={aboutPage}>
      <div style={aboutStyle}>
      <h1>About Us Page</h1>
        <p> MDN Games is your one-stop shop to AI based games.</p>
      </div>


        <div style={eachDeveloperStyle}>
          <a href="https://github.com/devendrachitanna">Devendra Chitanna</a>
        </div>

      <div style={eachDeveloperStyle}>
          <a href="https://github.com/MotongiM">Michel Motongi</a>
        </div>

        <div style={eachDeveloperStyle}>
          <a href="https://github.com/canadiankay">Nadia Kasim</a>
        </div>


    
    </div>
  )
}

export default About