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
