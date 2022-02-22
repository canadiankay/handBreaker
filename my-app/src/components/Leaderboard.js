// here we will have a bunch of boxes with different leaders from 'leader'

import Leader from "./Leader.js"

  // right now it's empty but after connectign witht the table, you should have the leaderboard
  // so you have something like a leaderboard variable with the info
  
const Leaderboard = () => {
  return (
    <div>
      <h1> This is the leaderboard</h1>
      <table>
          {/* here goes the leaderboard */}
       </table>

      <Leader />


      <h4>Go back <a href="/">HOME</a></h4>
      
    </div>
  )
}

export default Leaderboard
