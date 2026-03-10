import {
  initializeApp,
  firebaseConfig
} from "./fire.js";

export const app = initializeApp(firebaseConfig);

console.log("Initialized App =>", app);