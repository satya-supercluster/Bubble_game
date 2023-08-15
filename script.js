var score = 0;
let target;
var timer,time;
function target_maker() {
  target = Math.round(Math.random() * 100) % 11;
  document.querySelector("#targetc").textContent = target;
}
function update_score() {
  score += 1;
  document.querySelector("#scorec").textContent = score;
}
function bubble_maker() {
  let bubbles = "";
  for (var i = 1; i <= 153; i++) {
    let k = Math.round(Math.random() * 100) % 11;
    bubbles += `<div id="bubble">${k}</div>`;
  }
  document.querySelector("#bubbles").innerHTML = bubbles;
}
function game_time() {
  time = 60;
  timer = setInterval(() => {
    if(time==60){
      document.querySelector("#bubbles").addEventListener("click", check);
    }
    if (time == 0) {
      clearInterval(timer);
      let res = document.querySelector(".result");
      res.textContent = `Score: ${score}`;
      res.classList.add("show");
      document.querySelector("#bubbles").removeEventListener("click", check);
    }
    if(time>0)
    document.querySelector("#timec").textContent = --time;
  }, 1000);
}
function check(prop){
  if (target == Number(prop.target.textContent)) {
    update_score();
    target_maker();
    bubble_maker();
  } else if (score > 0) {
    score -= 2;
    update_score();
  }
}
document.querySelector(".btn").addEventListener("click", () => {
  bubble_maker();
  clearInterval(timer);
  game_time();
  target_maker();
  score = -1;
  update_score();
  let res = document.querySelector(".result");
  res.textContent = ``;
  res.classList.remove("show");
});
bubble_maker();
game_time();
target_maker();
