let btn = document.getElementById("btn");
let input = document.getElementById("input");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let bobby_main = document.getElementById("bobby_main");
let bobby_div = document.getElementById("bobby_div");
let boby_start = document.getElementById("boby_start");
let bobby_name = document.getElementById("bobby_name");
let bobby_score = document.getElementById("bobby_score");
let hight_score = document.getElementById("hight_score");
let bobby_stop = document.getElementById("bobby_stop");
let bobby_start = document.getElementById("bobby_start");

const audio = new Audio("./bobby.wav");
bobby_main.style.display = "none";

btn.addEventListener("click", function () {
  if (input.value) {
    boby_start.style.display = "none";
    bobby_main.style.display = "block";
    bobby_name.innerText = input.value;
  } else {
    alert("Adi daxil edin");
  }
  console.log();
});

const list = [];

bobby_start.addEventListener("click", function () {
  bobby_start.disabled = true;
  bobby_start.style.opacity = "0.3";

  let myInterval_easy = setInterval(myTimer, 1000);

  medium.addEventListener("click", function () {
    let myInterval_easy = setInterval(myTimer, 800);
  });
  
  hard.addEventListener("click", function () {
    const myInterval_easy = setInterval(myTimer, 600);
  });


  count = 0;
  say = 0;
  function myTimer() {
    let randomLeft = Math.floor(Math.random() * 330);
    let randomTop = Math.floor(Math.random() * 330);

    let span = document.createElement("span");
    span.classList.add("top");

  
    bobby_div.append(span);
    span.style.position = "absolute";
    span.style.left = `${randomLeft}px`;
    span.style.top = `${randomTop}px`;

    span.addEventListener("click", function () {
      audio.play();
      console.log("sfdr");
      span.remove();

      count += 1;
      bobby_score.innerText = count;
    });
    say += 1;

  

    if ((say-count) == 20) {
      alert("Siz uduzdunuz");

      clearInterval(myInterval_easy);
      document.querySelectorAll(".top").forEach((element) => {
        element.remove();
      });
      bobby_start.disabled = false;
      bobby_start.style.opacity = "1";

      list.push(count);
      const maxx = list.sort((a, b) => b - a);
      const max = maxx[0];
      hight_score.innerText = max;
      bobby_score.innerText = "0";
    }
  }


});
bobby_stop.addEventListener("click", function () {
  boby_start.style.display = "block";
  bobby_main.style.display = "none";
  hight_score.innerText = "0";
});
