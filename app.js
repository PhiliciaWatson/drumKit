
// function playSound(e){

//      // console.log(e.keyCode);
//      const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keycode}"]`);
//     if(!audio)return;  //stop the function from running all together
//     audio.currentTime = 0; //rewind to the start
//     audio.play();
//      // console.log(key);
//      key.classList.add('playing');

// }

   

//     function removeTransition(e){
//         // console.log(e);
//         if(e.propertyName !== 'transform')return; 
//         // skips it if it's not a transform
//         // console.log(e.propertyName);
//         this.classList.remove('playing')
//     }
   
//     const keys = document.querySelectorAll('.key');
    
//     keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//     window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;     
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);