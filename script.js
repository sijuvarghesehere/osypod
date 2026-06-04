import { supabase }
from "./supabase.js";

async function test() {

  const { data, error } =
    await supabase
      .from("songs")
      .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

}

test();
let currentSong = null;

const audio = new Audio();

const songList =
document.getElementById("songList");

songs.forEach((song,index)=>{

const card =
document.createElement("div");

card.className = "song-card";

card.innerHTML = `
<h3>${song.title}</h3>
<p>${song.artist}</p>
`;

card.onclick = ()=>{

loadSong(index);

};

songList.appendChild(card);

});

function loadSong(index){

currentSong = index;

const song = songs[index];

audio.src = song.file;

document.getElementById("currentTitle")
.innerText = song.title;

document.getElementById("currentArtist")
.innerText = song.artist;

document.getElementById("pillTitle")
.innerText = song.title;

document.getElementById("pillArtist")
.innerText = song.artist;

audio.play();

document.querySelector(".vinyl")
.classList.add("spinning");

document.getElementById("playBtn")
.innerText = "❚❚";

}

document.getElementById("playBtn")
.onclick = ()=>{

if(audio.paused){

audio.play();

document.querySelector(".vinyl")
.classList.add("spinning");

}else{

audio.pause();

document.querySelector(".vinyl")
.classList.remove("spinning");

}

};

document.getElementById("miniPlay")
.onclick = ()=>{

if(audio.paused){

audio.play();

}else{

audio.pause();

}

};

document.getElementById("themeToggle")
.onclick = ()=>{

document.body.classList.toggle("light");

};

document.getElementById("vinylHub")
.onclick = ()=>{

document.getElementById("playerModal")
.classList.add("active");

};

document.getElementById("closePlayer")
.onclick = ()=>{

document.getElementById("playerModal")
.classList.remove("active");

};

document
.querySelectorAll("#dock button[data-screen]")
.forEach(btn=>{

btn.onclick = ()=>{

document
.querySelectorAll(".screen")
.forEach(screen=>{

screen.classList.remove("active");

});

document
.getElementById(
btn.dataset.screen
)
.classList.add("active");

};

});

document
.getElementById("musicUpload")
.addEventListener("change",(e)=>{

const files = e.target.files;

for(let file of files){

songs.push({

title:file.name,

artist:"Local Upload",

cover:"assets/covers/default.jpg",

file:URL.createObjectURL(file)

});

}

location.reload();

});
