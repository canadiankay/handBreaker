// here we will have a bunch of boxes with different leaders from 'leader'

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Leader from "./Leader.js"
import { db } from "../firebase"


// right now it's empty but after connectign witht the table, you should have the leaderboard
// so you have something like a leaderboard variable with the info

const Leaderboard = () => {

  const [scores, setScores] = useState([])



  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "leaderboard")).then(
      (data) => {
        console.log("DATA!!!!!!", data)
        const list = [...scores];
        data.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`, doc.data());
          console.log("SCORES#####", scores)
          list.push(doc.data())
        });
        setScores(list)

      }
    );


    // db.collection("leaderboard").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //   });
    // });
  }, [])


  return (
    <div>
      <h1> This is the leaderboard</h1>
      <table>
        <tr>
          <th>User</th>
          <th>Score</th>
        </tr>
        {scores.map((score) => (
          <tr>
            <td>{score.user}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </table>

      <Leader />

      <h4>Go back to <a href="/game">GAME</a></h4>
      <h4>Go back to <a href="/">HOME</a></h4>

    </div>
  )
}

export default Leaderboard
