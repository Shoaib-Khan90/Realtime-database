import { doc, getDatabase, ref, set } from "./fire.js";
import { app } from "./real.js";

const db = getDatabase(app);
console.log("Realtime Database =>", db);

let Name = document.getElementById("name")
let Messege = document.getElementById("messege")
let Button = document.getElementById("btn")

Button.addEventListener("click",read)

async function read (){
 const id = new Date();
  set(ref(db, 'Messege/' + id), {
    author : Name.value,
    text: Messege.value,
  });
}
