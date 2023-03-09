# Emoji Exploison 🍣

<!-- <img src="https://github.com/z-bj/Confetis-JS/blob/master/emoji-explosion.gif" width="350" height="auto" /> -->

[![gif](https://github.com/z-bj/Confetis-JS/blob/master/emoji-explosion.gif)](https://z-bj.github.io/Emojis-explosion/)

![html](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![greensock](https://img.shields.io/badge/GreenSock-88CE02.svg?style=for-the-badge&logo=GreenSock&logoColor=white)
![githubPages](https://img.shields.io/badge/GitHub%20Pages-222222.svg?style=for-the-badge&logo=GitHub-Pages&logoColor=white)

A fun and playful JavaScript project that creates an explosion of confetti-emojis on the screen using HTML, CSS, JavaScript, and GreenSock animation library.

Whoa, whoa!

Let's go for an explosion of confetti-emojis in JavaScript! 

## Demo

Check out the live demo of this project [here](https://z-bj.github.io/Emojis-explosion).

## Script

```javascript

const containerSlot = document.querySelector(".slot");
const btnConfettis = document.querySelector(".btn-confettis");
const emojis = ["🍰", "🍣", "🍑", "🍓"];

btnConfettis.addEventListener("click", fiesta);

function fiesta() {
  if (isTweening()) return;
  // on empeche l'anim si ca tween deja..

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    // choppe un emoji au hasard dans le Array
    containerSlot.appendChild(confetti);
  }

  animateConfettis();
}

function animateConfettis() {
  const TLCONF = gsap.timeline();

  TLCONF.to(".slot div", {
    y: "random(-100,100)",
    x: "random(-100,100)",
    z: "random(0,1000)",
    rotation: "random(-90,90)",
    duration: 1,
  })
    .to(".slot div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
    //   autoAlpha--> opacity and visibilty;

    .add(() => {
      containerSlot.innerHTML = "";
      // on vidange le DOM avec innerHTML--> vide
    });
}

function isTweening() {
  return gsap.isTweening(".slot div");
}

```

## Usage

Click the "Fiesta" button on the page to trigger an explosion of confetti-emojis. The code uses a for loop to randomly select emojis from an array and create new divs to display them. The `animateConfettis` function then applies a random combination of animations to each confetti emoji using GSAP.

## Contributing

This project is open to contributions and suggestions. Feel free to submit a pull request with any improvements or bug fixes.



