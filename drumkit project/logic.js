let soundEffect = new Audio('sound.mp3');
let bruh = new Audio('bruh.mp3');
let mission = new Audio('mission.mp3');
let fatality = new Audio('fatality.mp3');
let derp = new Audio('derp.mp3');
let nigga = new Audio('nigga.mp3');
let goat = new Audio('goat.mp3');
let bully = new Audio('bully.mp3');
let uhhaha = new Audio('uhhaha.mp3');

$('.box').click((event) => {
  let element = event.currentTarget;
  console.log(element.id);
  $(element).addClass('clicked');
  setTimeout(() => {
    $(element).removeClass("clicked")
  }, 100);
  if (element.id === "clap") {
    soundEffect.play()
  } else if (element.id === "hihat") {
    bruh.play()
  } else if (element.id === "kick") {
    mission.play()
  } else if (element.id === "openhat") {
    fatality.play()
  } else if (element.id === "boom") {
    derp.play()
  } else if (element.id === "ride") {
    nigga.play()
  } else if (element.id === "snare") {
    goat.play()
  } else if (element.id === "tom") {
    bully.play()
  } else if (element.id === "tink") {
    uhhaha.play()
  }
});

