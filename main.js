song=" "
function preload(){
song=loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video= createCapture(VIDEO)
    video.hide()

    //posenet=ml5.poseNet(video,modelLoaded)
    //posenet.on("pose",gotresult)
}

function modelLoaded(){
    console.log("model has been loaded")
}


function draw(){
    image(video,0,0,600,500)
}


function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}