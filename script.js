let video = document.getElementById('video');
let loopbtn = document.getElementById('loopButton')
let counter = document.getElementById('cntr')
let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let n = 0;
let sp = 0;
let text = document.getElementById('textSLider');
let progress = document.getElementById( "progress" );
const timer = document.getElementById( "timer" );
let volume = document.getElementById('volumeBar')
 
console.log(video.controls)


function fwrd15(){video.currentTime+=1}

function bkrd15(){video.currentTime-=1}

function speedUp(){if(sp<20){video.playbackRate += 0.1; counterAdd();}}


function speedDwn(){if(sp>-9){video.playbackRate -= 0.1;counterMinus();}}

function play(){video.play();playButton.classList.add('hidePlayPause'); pauseButton.classList.remove('hidePlayPause');progressLoop()}

function pause(){video.pause();pauseButton.classList.add('hidePlayPause'); playButton.classList.remove('hidePlayPause')}



function stop(){
    video.pause(); video.currentTime=0;
    video.playbackRate=1.0;
    video.removeAttribute('loop');
    loopbtn.classList.remove('loopActive');
    n=0;
    counter.classList.add('hideBtn');
    sp=0;
}


function loop(){
    if(n == 0){
        n=1; video.setAttribute('loop',''); loopbtn.classList.add('loopActive')}
        else {n = 0; video.removeAttribute('loop'); loopbtn.classList.remove('loopActive')}
}

let buttons = document.getElementById('buttons');
let btn = document.getElementsByClassName('btn');

buttons.onmouseover = function (){for(i=0;i<btn.length;i++){
        btn[i].classList.remove('hide')};
        text.classList.remove('hide')
    }
buttons.onmouseout = function (){for(i=0;i<btn.length;i++){
        btn[i].classList.add('hide')};
        text.classList.add('hide')}


function counterAdd (){sp+=1;AttXn()}
function counterMinus (){sp-=1;AttXn()}

function AttXn () {
    counter.classList.remove('hideBtn');
     if(sp>0){counter.innerText = 'x'+sp}
        else{counter.innerText = '-x'+Math.abs(sp)};
        if(sp==0){counter.classList.add('hideBtn')};}

function changeVolume(){
    let videoVol = video.getAttribute('volume')
    video.volume = (volume.value)/100
    console.log((volume.value)/100)
text.innerText = Math.ceil(video.volume*100) +'%' 
}



function progressLoop() {
    setInterval(function () {
      progress.value = Math.round((video.currentTime / video.duration) * 100);
      timer.innerHTML = Math.round(video.currentTime) + " seconds";
    });
  }
