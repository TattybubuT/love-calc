let yourName = prompt(`Write your name:`);
let yourPartnersName = prompt(`Write your partner's name:`);

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore >= 70) {
  document.write(
    `<h2> ${yourName} + ${yourPartnersName}</h2> <br><h3>Your love score is ${loveScore}% <br>You love each other very much!👩‍❤️‍👨 </h3>`
  );
} else if (loveScore < 70 && loveScore > 49) {
  document.write(
    `<h2> ${yourName} + ${yourPartnersName}</h2> <br><h3>Your love score is ${loveScore}% <br>You are good friends👫👩‍❤️</h3>`
  );
} else {
  document.write(
    `<h2> ${yourName} + ${yourPartnersName}</h2> <br><h3>Your love score is ${loveScore}% <br>You can't be together💔</h3>`
  );
}

const h3t = document
  .querySelector("h3")
  .setAttribute(
    "style",
    "color: pink; font-size: 36px; text-align: center; margin-top:50px;font-family: cursive;"
  );
const h2t = document
  .querySelector("h2")
  .setAttribute(
    "style",
    "color: pink; font-size: 50px; text-align: center; margin-top:10px font-family: cursive;"
  );  
