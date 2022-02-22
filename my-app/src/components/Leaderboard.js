// here we will have a bunch of boxes with different leaders from 'leader'

import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import Leader from "./Leader.js"
import { db } from "../firebase"


// right now it's empty but after connectign witht the table, you should have the leaderboard
// so you have something like a leaderboard variable with the info

const Leaderboard = () => {

  useEffect(() => {
    // const querySnapshot = await getDocs(collection(db, "leaderboard"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    db.collection("leaderboard").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }, [])


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
