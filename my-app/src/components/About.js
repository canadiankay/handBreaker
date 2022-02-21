

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
        A group of entry-level devleoppers, Dev, Nadia and Michel, interested in the world of AI and Gaming.
        We want to create the next gaming portal for AI games only
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