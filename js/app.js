const MAIN_URL = `https://612de9a1d11e5c00175582be.mockapi.io/version/drumpads`;

let selectedLib;
const $stopBtn = $(`.button-stop`);
const $container = $(`.box`);
const $libOne = $(`#1`);
const $libTwo = $(`#2`);
const $libThree = $(`#3`);
const $phonkLoop = $(`#4`);
const $trapLoop = $(`#5`);
const $dnbLoop = $(`#6`);
const $body = $(`body`);
const padOne = new sound("https://dfeduk.github.io/music/phonkLoop.wav");
const padTwo = new sound("https://dfeduk.github.io/music/trapLoop.wav");
const padThree = new sound("https://dfeduk.github.io/music/dnbLoop.wav");
let sounds = [];

init();

const pressKeyHandler = (e) => {
  let value;
  if (typeof e === `number`) {
    value = e;
  } else {
    value = e.keyCode;
  }
  switch (value) {
    case 81:
      const filterQ = selectedLib.filter((pad) => pad.key === "Q");
      playSound(filterQ[0].sound, filterQ[0].name);
      break;
    case 87:
      const filterW = selectedLib.filter((pad) => pad.key === "W");
      playSound(filterW[0].sound, filterW[0].name);
      break;
    case 69:
      const filterE = selectedLib.filter((pad) => pad.key === "E");
      playSound(filterE[0].sound, filterE[0].name);
      break;
    case 82:
      const filterR = selectedLib.filter((pad) => pad.key === "R");
      playSound(filterR[0].sound, filterR[0].name);
      break;
    case 65:
      const filterA = selectedLib.filter((pad) => pad.key === "A");
      playSound(filterA[0].sound, filterA[0].name);
      break;
    case 83:
      const filterS = selectedLib.filter((pad) => pad.key === "S");
      playSound(filterS[0].sound, filterS[0].name);
      break;
    case 68:
      const filterD = selectedLib.filter((pad) => pad.key === "D");
      playSound(filterD[0].sound, filterD[0].name);
      break;
    case 70:
      const filterF = selectedLib.filter((pad) => pad.key === "F");
      playSound(filterF[0].sound, filterF[0].name);
      break;
    case 90:
      const filterZ = selectedLib.filter((pad) => pad.key === "Z");
      playSound(filterZ[0].sound, filterZ[0].name);
      break;
    case 88:
      const filterX = selectedLib.filter((pad) => pad.key === "X");
      playSound(filterX[0].sound, filterX[0].name);
      break;
    case 67:
      const filterC = selectedLib.filter((pad) => pad.key === "C");
      playSound(filterC[0].sound);
      break;
    case 86:
      const filterV = selectedLib.filter((pad) => pad.key === "V");
      playSound(filterV[0].sound, filterV[0].name);
      break;
    case 78:
      const filterN = selectedLib.filter((pad) => pad.key === "N");
      playSound(filterN[0].sound, filterN[0].name);
      break;
    case 77:
      const filterM = selectedLib.filter((pad) => pad.key === "M");
      playSound(filterM[0].sound, filterM[0].name);
      break;
    case 74:
      const filterJ = selectedLib.filter((pad) => pad.key === "J");
      playSound(filterJ[0].sound, filterJ[0].name);
      break;
    case 85:
      const filterU = selectedLib.filter((pad) => pad.key === "U");
      playSound(filterU[0].sound, filterU[0].name);
      break;
    default:
      break;
  }
};
// const classClick = (key) => {
//   const pad = document.getElementById(key);
//   pad.classList.add("hover");
// };
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.currentTime = 0;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.classList.add("clip");
  this.sound.loop = true;
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
  this.load = function () {
    this.sound.load();
  };
  this.toggle = true;
}
// oneQ = new sound(`../js/JuicyJ.wav`);
const playSound = (sound) => {
  if (sound.toggle === true) {
    sound.load();
    sound.play();
    sound.toggle = false;
  } else if (sound.toggle === false) {
    sound.stop();
    sound.toggle = true;
  }
};

$(window).keydown(pressKeyHandler);
$(window).keydown((e) => {
  const code = e.keyCode;
  if ($(`div[id= ${code}]`).hasClass(`hover`)) {
    $(`div[id= ${code}]`).removeClass(`hover`);
  } else {
    $(`div[id= ${code}]`).addClass(`hover`);
  }
});
$container.click($container, onPadClick);
$container.click($container, toggleColor);

function onPadClick(e) {
  pressKeyHandler(+e.target.id);
}
function toggleColor(e) {
  if ($(e.target).hasClass(`hover`)) {
    $(e.target).removeClass(`hover`).removeClass("hasactive");
  } else {
    $(e.target).addClass(`hover`);
  }
}
$libOne.on(`click`, (e) => getMusic(MAIN_URL));
$libTwo.on(`click`, (e) => getMusic("https://dfeduk.github.io/data/pack.json"));
$libThree.on(`click`, (e) =>
  getMusic("https://dfeduk.github.io/data/packTwo.json")
);

function init() {
  getMusic(MAIN_URL);
}

function audio(item) {
  return {
    sound: new sound(item.src),
    key: item.key,
  };
}
function getMusic(URL) {
  $container.toArray().forEach((el) => el.classList.remove("hover"));
  $(`audio`).remove();
  fetch(URL)
    .then((resp) => resp.json())
    .then((data) => (selectedLib = data.map(audio)));
}

$phonkLoop.mousedown(function () {
  if (padOne.toggle === true) {
    padOne.load();
    padOne.play();
    padOne.toggle = false;
  } else if (padOne.toggle === false) {
    padOne.stop();
    padOne.toggle = true;
  }
});
$trapLoop.mousedown(function () {
  if (padTwo.toggle === true) {
    padTwo.load();
    padTwo.play();
    padTwo.toggle = false;
  } else if (padTwo.toggle === false) {
    padTwo.stop();
    padTwo.toggle = true;
  }
});
$dnbLoop.mousedown(function () {
  if (padThree.toggle === true) {
    padThree.load();
    padThree.play();
    padThree.toggle = false;
  } else if (padThree.toggle === false) {
    padThree.stop();
    padThree.toggle = true;
  }
});
// navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//   const mediaRecorder = new MediaRecorder(stream);
//   let voice = [];
//   document.querySelector("#start").addEventListener("click", function () {
//     mediaRecorder.start();
//   });

//   mediaRecorder.addEventListener("dataavailable", function (event) {
//     voice.push(event.data);
//   });

//   document.querySelector("#stop").addEventListener("click", function () {
//     mediaRecorder.stop();
//     const audioBlob = new Blob(voice);
//     const audioUrl = URL.createObjectURL(audioBlob);
//     const audio = new Audio(audioUrl);
//     console.log(voice);
//   });
// });
