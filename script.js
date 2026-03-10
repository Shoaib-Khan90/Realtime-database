import { doc, getDatabase, ref, set, onValue, child, get, push, update, runTransaction, } from "./fire.js";
import { app } from "./real.js";

const db = getDatabase(app);
console.log("Realtime Database =>", db);

let Name = document.getElementById("name")
let Messege = document.getElementById("messege")
let Button = document.getElementById("btn")
let Like = document.getElementById("btn1")
let likeCountSpan = document.getElementById("likeCount");

Button.addEventListener("click",read)

async function read (){
 const id = new Date();
  set(ref(db, 'Messege/' + id), {
    author : Name.value  ,
    text: Messege.value  ,
  });
  Name.value = "";
  Messege.value = "";
}

//onvalue

const starCountRef = ref(db, 'Messege/');

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

//child and get

get(child(ref(db), "Messege/Messege")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data found");
  }
});

//push

const messagesRef = ref(db, "Messege");

const newMsgRef = push(messagesRef); 
set(newMsgRef, {
  author: "Shoaib",
  text: "Hello world"
});

//Updated

const msgRef = ref(db, "Messege/-Lx1a2b3c4d"); 

update(msgRef, {
  text: "Updated message" 
});

//runtransaction

Like.addEventListener("click",Likebtn)

async function Likebtn() {
  const messageId = "-Lx1a2b3c4d"; // 
const msgLikesRef = ref(db, `Messege/${messageId}/likes`);
runTransaction(msgLikesRef, (currentLikes) => {
  
    return (currentLikes || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      likeCountSpan.textContent = result.snapshot.val();
    }
  }).catch((error) => {
    console.error("Transaction failed:", error);
  });
}

//Uid And key

