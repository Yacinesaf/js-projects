const panel1 = document.querySelector('.bg1');
const panel2 = document.querySelector('.bg2');
const panel3 = document.querySelector('.bg3');
const panel4 = document.querySelector('.bg4');
const panel5 = document.querySelector('.bg5');

const selfc = document.querySelector('.selfc');
const is = document.querySelector('.is');
const key = document.querySelector('.key');
const to = document.querySelector('.to');
const wisdom = document.querySelector('.wisdom');

let bool1 = true;
panel1.onclick = () => {
  if (bool1) {
    panel1.classList.add('component-opened');
    panel2.classList.remove('component-opened');
    panel3.classList.remove('component-opened');
    panel4.classList.remove('component-opened');
    panel5.classList.remove('component-opened');
    is.classList.add('hidden');
    key.classList.add('hidden');
    to.classList.add('hidden');
    wisdom.classList.add('hidden');
    setTimeout(() => {
      selfc.innerHTML = 'Self Consciousness';
      selfc.classList.add('text-shown');
      selfc.classList.remove('hidden');
    }, 1000)
  } else {
    selfc.classList.remove('text-shown');
    selfc.classList.add('hidden');
    setTimeout(() => {
      panel1.classList.remove('component-opened');
    }, 1000)
  }
  bool1 = !bool1;
  bool2 = true;
  bool3 = true;
  bool4 = true;
  bool5 = true;
};
let bool2 = true;
panel2.onclick = () => {
  if (bool2) {
    panel2.classList.add('component-opened');
    panel1.classList.remove('component-opened')
    panel3.classList.remove('component-opened')
    panel4.classList.remove('component-opened')
    panel5.classList.remove('component-opened')
    selfc.classList.add('hidden');
    selfc.classList.remove('text-shown')
    key.classList.add('hidden');
    to.classList.add('hidden');
    wisdom.classList.add('hidden');
    setTimeout(() => {
      is.innerHTML = 'Is';
      is.classList.add('text-shown');
      is.classList.remove('hidden');
    }, 1000)
  } else {
    is.classList.remove('text-shown');
    is.classList.add('hidden')
    setTimeout(() => {
      panel2.classList.remove('component-opened');
    }, 1000)
  }
  bool2 = !bool2;
  bool1 = true;
  bool3 = true;
  bool4 = true;
  bool5 = true;
};
let bool3 = true;
panel3.onclick = () => {
  if (bool3) {
    panel3.classList.add('component-opened');
    panel2.classList.remove('component-opened')
    panel1.classList.remove('component-opened')
    panel4.classList.remove('component-opened')
    panel5.classList.remove('component-opened')
  } else {
    panel3.classList.remove('component-opened');
  }
  bool3 = !bool3;
  bool2 = true;
  bool1 = true;
  bool4 = true;
  bool5 = true;
};
let bool4 = true;
panel4.onclick = () => {
  if (bool4) {
    panel4.classList.add('component-opened');
    panel2.classList.remove('component-opened')
    panel3.classList.remove('component-opened')
    panel1.classList.remove('component-opened')
    panel5.classList.remove('component-opened')
  } else {
    panel4.classList.remove('component-opened');
  }
  bool4 = !bool4;
  bool2 = true;
  bool3 = true;
  bool1 = true;
  bool5 = true;
};
let bool5 = true;
panel5.onclick = () => {
  if (bool5) {
    panel5.classList.add('component-opened');
    panel2.classList.remove('component-opened')
    panel3.classList.remove('component-opened')
    panel4.classList.remove('component-opened')
    panel1.classList.remove('component-opened')
  } else {
    panel5.classList.remove('component-opened');
  }
  bool5 = !bool5;
  bool2 = true;
  bool3 = true;
  bool4 = true;
  bool1 = true;
};
