const panel1 = document.querySelector('.bg1');
const panel2 = document.querySelector('.bg2');
const panel3 = document.querySelector('.bg3');
const panel4 = document.querySelector('.bg4');
const panel5 = document.querySelector('.bg5');

// const selfc = document.querySelector('.selfc');
// const is = document.querySelector('.is');
// const key = document.querySelector('.key');
// const to = document.querySelector('.to');
// const wisdom = document.querySelector('.wisdom');

let bool1 = true;
panel1.onclick= () => {
    if(bool1) {
    panel1.classList.add('component-opened');
    // selfc.classList.remove('text-hidden')
    panel2.classList.remove('component-opened')  
    panel3.classList.remove('component-opened')  
    panel4.classList.remove('component-opened')  
    panel5.classList.remove('component-opened')  
    } else {
      // selfc.classList.add('text-hidden')
      panel1.classList.remove('component-opened');
    }
    bool1 = !bool1;
};
let bool2 = true;
panel2.onclick= () => {
  if(bool2) {
  panel2.classList.add('component-opened');
  panel1.classList.remove('component-opened')  
  panel3.classList.remove('component-opened')  
  panel4.classList.remove('component-opened')  
  panel5.classList.remove('component-opened')  
  } else {
    panel2.classList.remove('component-opened');
  }
  bool2 = !bool2;
};
let bool3 = true;
panel3.onclick= () => {
  if(bool3) {
  panel3.classList.add('component-opened');
  panel2.classList.remove('component-opened')  
  panel1.classList.remove('component-opened')  
  panel4.classList.remove('component-opened')  
  panel5.classList.remove('component-opened')  
  } else {
    panel3.classList.remove('component-opened');
  }
  bool3 = !bool3;
};
let bool4 = true;
panel4.onclick= () => {
  if(bool4) {
  panel4.classList.add('component-opened');
  panel2.classList.remove('component-opened')  
  panel3.classList.remove('component-opened')  
  panel1.classList.remove('component-opened')  
  panel5.classList.remove('component-opened')  
  } else {
    panel4.classList.remove('component-opened');
  }
  bool4 = !bool4;
};
let bool5 = true;
panel5.onclick= () => {
  if(bool5) {
  panel5.classList.add('component-opened');
  panel2.classList.remove('component-opened')  
  panel3.classList.remove('component-opened')  
  panel4.classList.remove('component-opened')  
  panel1.classList.remove('component-opened')  
  } else {
    panel5.classList.remove('component-opened');
  }
  bool5 = !bool5;
};
