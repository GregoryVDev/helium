// S'assurer que les liens sont clickables et on un z-index plus élevé

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});
// window.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + "px";
//     cursor.style.top = e.pageY + "px";

//     mouse2.style.left = e.pageX + "px";
//     mouse2.style.top = e.pageY + "px";

//     mouse3.style.left = e.pageX + "px";
//     mouse3.style.top = e.pageY + "px";

//     document.body.style.cursor = "none";
// });
