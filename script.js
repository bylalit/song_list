let masterPlay = document.getElementById("play");
let audio = new Audio("songAsates/1.mp3")
let myProgressBar = document.getElementById("myProgressBar");
let palyed = true;
let songTitle = document.getElementById("songTitle");
let artist = document.getElementById("artist");
let singerName = document.getElementById("singer-name");
let songIndex = 0;


let songs = [
    {
        songName: "Agar Tum Saath Ho",
        songPath: "songAsates/1.mp3",
        artist: "songImg/Arijit.jpeg",
        singerName: "Arijit Sing"
    },
    {
        songName: "Taaron Ke Sheher",
        songPath: "songAsates/2.mp3",
        artist: "songImg/Neha.jpeg",
        singerName: "Neha Kakkar"
    },
    {
        songName: "Dil Galti Kar Baitha Hai",
        songPath: "songAsates/3.mp3",
        artist: "songImg/Jubin.jpeg",
        singerName: "Jubin Nautiyal"
    },
    {
        songName: "Pehli Dafa",
        songPath: "songAsates/4.mp3",
        artist: "songImg/Atif.jpeg",
        singerName: "Atif Aslam"
    },
    {
        songName: "O Maahi",
        songPath: "songAsates/5.mp3",
        artist: "songImg/Arijit.jpeg",
        singerName: "Arijit Sing"
    },
    {
        songName: "Suniyan Suniyan",
        songPath: "songAsates/6.mp3",
        artist: "songImg/Suniya.jpeg",
        singerName: "Siddharth Koli"
    },
    {
        songName: "Vhalam Avon Ne",
        songPath: "songAsates/7.mp3",
        artist: "songImg/Valam.jpeg",
        singerName: "Jigardan Gadhvi"
    },
    {
        songName: "Lofi Love",
        songPath: "songAsates/8.mp3",
        artist: "songImg/Lofi.jpeg",
        singerName: "Sourav Joshi"
    },
    {
        songName: "Mahiye Jinna Sohna",
        songPath: "songAsates/9.mp3",
        artist: "songImg/Darshan.jpeg",
        singerName: "Darshan Raval"
    },
    {
        songName: "Le Aaunga",
        songPath: "songAsates/10.mp3",
        artist: "songImg/Arijit.jpeg",
        singerName: "Arijit Sing"
    },
]

audio.addEventListener("timeupdate", ()=>{
    // console.log("timeupdate");
    progress = parseInt((audio.currentTime/audio.duration) * 100);
    myProgressBar.value = progress;
    // console.log(progress);
});

myProgressBar.addEventListener("change", () =>{
    audio.currentTime = myProgressBar.value * audio.duration / 100;
});

masterPlay.addEventListener("click", ()=>{
    if(palyed == true){
        audio.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        palyed = false;
    }else{
        audio.pause();
        masterPlay.classList.add("fa-pause");
        masterPlay.classList.add("fa-play");
        palyed = true;
    }
});


document.getElementById("next").addEventListener("click", () =>{
    if(songIndex >= 9){
        songIndex = 0;
       
    }else{
        songIndex += 1;
    }
    audio.src = songs[songIndex].songPath;
    songTitle.innerText = songs[songIndex].songName;
    singerName.innerText = songs[songIndex].singerName;
    artist.src = songs[songIndex].artist;
    audio.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
});

document.getElementById("previos").addEventListener("click", () =>{
    if(songIndex <= 0){
        songIndex = 0;
       
    }else{
        songIndex -= 1;
    }
    audio.src = songs[songIndex].songPath;
    audio.play();
    songTitle.innerText = songs[songIndex].songName;
    artist.src = songs[songIndex].artist;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
});
