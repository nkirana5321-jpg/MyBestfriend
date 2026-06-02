function openStory(){

const cover =
document.getElementById("cover");

cover.style.transition = "1s";
cover.style.opacity = "0";

const music =
document.getElementById("bgMusic");

if(music){
music.play();
}

setTimeout(()=>{
cover.style.display = "none";
},1000);

}