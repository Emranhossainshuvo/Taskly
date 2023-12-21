import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaVOe5iJlMQVgjCeOeY704r333qDAkEi8",
  authDomain: "taskly-976e3.firebaseapp.com",
  projectId: "taskly-976e3",
  storageBucket: "taskly-976e3.appspot.com",
  messagingSenderId: "734231076111",
  appId: "1:734231076111:web:f8f96054941b5f8b36327a"
};

export const app = initializeApp(firebaseConfig);