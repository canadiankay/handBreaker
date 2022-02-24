

const About = () => {

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
    <div>
      <main style={aboutStyle}>
        <p> 
        MDN Games is your one-stop shop to AI based games.
        </p>
      </main>

      <body> 

        <section style={eachDeveloperStyle}>
          <a href="https://github.com/devendrachitanna">Devendra Chitanna</a>
        </section>

      <section style={eachDeveloperStyle}>
          <a href="https://github.com/MotongiM">Michel Motongi</a>
        </section>

        <section style={eachDeveloperStyle}>
          <a href="https://github.com/canadiankay">Nadia Kasim</a>
        </section>

      </body>
    
    </div>
  )
}

export default About