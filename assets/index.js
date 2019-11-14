 import MediaPlayer from './mediaPlayer.js'
import AutoPlay from  './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [/* new AutoPlay() */] });

const buttonPlay = document.querySelector('#playButton');
const buttonMute = document.querySelector('#muteButton');

buttonPlay.onclick = () => player.action(); 
buttonMute.onclick = () => player.actionMute();
