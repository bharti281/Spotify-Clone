// console.log("Welcome to Sportify")
let songIndex =0
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from (document.getElementsByClassName("songItem"))
let songItemPlay = document.getElementsByClassName("songItemPlay")
let songs=[
     {songName: "Pal Pal dil ke Pass ",filePath:"songs/1.mp3",coverPath:"/covers/1.jfif"}, 
     {songName: "Kal Ho na Ho ",filePath:"songs/2.mp3",coverPath:"/covers/2.jfif"}, 
     {songName: "Sine se tere sir ko",filePath:"songs/3.mp3",coverPath:"/covers/3.jfif"},
     {songName: "Dil me ho tum ",filePath:"songs/4.mp3",coverPath:"/covers/4.jfif"}, 
     {songName: "Pal Pal dil ke Pass",filePath:"songs/5.mp3",coverPath:"/covers/5.jfif"},
     {songName: "Tum hi aana",filePath:"songs/6.mp3",coverPath:"/covers/6.jfif"},
     {songName: "Phir Mulakaat ",filePath:"songs/7.mp3",coverPath:"/covers/7.jfif"},
]

songItems.forEach((element ,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
})

// audioElement.play()
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        gif.style.opacity=0
    }
})
audioElement.addEventListener('timeupdate',()=>{    
   progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
 
    myProgressBar.value= progress
})
myProgressBar.addEventListener('change',()=>{
   
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})

const makeAllPlays=()=>{
    Array.from (document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })

}
// const makeAllPause=()=>{
//     Array.from (document.getElementsByClassName("songItemPlay")).forEach((element)=>{
//         element.classList.add('fa-pause-circle')
//         element.classList.remove('fa-play-circle')

//     })

// }




Array.from (document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        e.target.classList.remove('fa-play-circle')
        songIndex= parseInt(e.target.id)
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex}.mp3`
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })

    
})




document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){

        songIndex=0
    }
    else{
        songIndex+=1

    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){

        songIndex=0
    }
    else{
        songIndex-=1

    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
