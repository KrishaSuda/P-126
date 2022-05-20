leftWristX = 0;
leftWristY = 0;
scoreLeftWrist = 0
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
statusOfTheSong = "";

function preload(){
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is intialized');
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#32a852");
    stroke("#32a852")
    if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song1.isPlaying() = flase){
            song1.play();
            document.getElementById("song").innerHTML = "Peter Pan";
        }
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}
