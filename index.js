

document.querySelector(".w").addEventListener("click", run1);
function run1(){
  var crash=new Audio("sounds/crash.mp3");
  crash.play();
}
document.querySelector(".a").addEventListener("click", aj);
function aj(){
  var kick=new Audio("sounds/kick-bass.mp3");
  kick.play();
}
document.querySelector(".s").addEventListener("click", run3);
function run3(){
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
}
document.querySelector(".d").addEventListener("click", run4);
function run4(){
  var tom=new Audio("sounds/tom-1.mp3");
  tom.play();
}
document.querySelector(".j").addEventListener("click", run5);
function run5(){
  var rom=new Audio("sounds/tom-2.mp3");
  rom.play();
}
document.querySelector(".k").addEventListener("click", run6);
function run6(){
  var ruby=new Audio("sounds/tom-3.mp3");
  ruby.play();
}
document.querySelector(".l").addEventListener("click", run7);
function run7(){
  var maeve=new Audio("sounds/tom-4.mp3");
  maeve.play();
}
