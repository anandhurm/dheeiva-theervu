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