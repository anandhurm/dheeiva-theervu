const images = [
  "images/god1.jpg.jpeg",
  "images/god2.jpg.jpeg"
];

let index = 0;

setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }

  document.getElementById("slide").src = images[index];
}, 3000);
let count = localStorage.getItem("visitorCount");

if (!count) {
  count = 0;
}

count++;
localStorage.setItem("visitorCount", count);

document.getElementById("visitorCount").innerText = count;
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText =
    now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);
// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAPRw8rEEzOMXwgDFdRNs9OSJEFH9znfy8",
  authDomain: "dheiva-theervu.firebaseapp.com",
  projectId: "dheiva-theervu",
  storageBucket: "dheiva-theervu.firebasestorage.app",
  messagingSenderId: "527566367493",
  appId: "1:527566367493:web:0bcee3d5806516c3b5656c",
  measurementId: "G-FM8NZVJKBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load Panchangam Data
async function loadPanchangam() {

    const docRef = doc(db, "daily_panchangam", "today");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        const data = docSnap.data();

        document.getElementById("nakshatra").innerText = data.nakshatra;
        document.getElementById("tithi").innerText = data.tithi;
        document.getElementById("rahu").innerText = data.rahu;
        document.getElementById("yamagandam").innerText = data.yamagandam;
        document.getElementById("kuligai").innerText = data.kuligai;
        document.getElementById("sunrise").innerText =
            data.sunrise + " | " + data.sunset;
        document.getElementById("festival").innerText = data.festival;
        document.getElementById("rasi").innerText = data.rasi;

    } else {

        console.log("No Panchangam Data Found");

    }
}

loadPanchangam();
