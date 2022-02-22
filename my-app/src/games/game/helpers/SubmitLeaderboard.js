/*
  imports from firebase(dependencies)
*/
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase"

// import firebaseApp from "../../../firebase";

export default async function submitLeaderboard({ name, score }) {
  const username = name;
  console.log(`The user ${username} has a score of : ${score}`);
  try {
    const docRef = await addDoc(collection(db, "leaderboard"), {
      score: score,
      user: username,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  // assuming we have a leaderboard table
  // just insert new entry with the following info:
  // username, score


  // something like this
  // table.leaderboard.insert(username, score);
  // firebaseApp.db('leaderboard').insert
}


// you can do one of two
// 1:
// keep inserting all scores, so one user can have unlimited highscores
// when you want to see the leaderboard, get the table sorted by score(highest to lowest)
// and the same user could show up many times

// 2:
// insert in a way that you only save the highest score of each user
// when you want to see the leaderboard, get the table sorted by score(highest to lowest)
// and a user can only show up once 