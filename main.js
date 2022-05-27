leftWristX = 0;
leftWristY = 0;
scoreLeftWrist = 0
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
statusOfTheSong1 = "";
statusOfTheSong2 = "";
song1 = "";
song2 = "";

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
    statusOfTheSong1 = song1.isPlaying();
    statusOfTheSong2 = song2.isPlaying();
    fill("#32a852");
    stroke("#32a852")
    if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(statusOfTheSong1 = false){
            song1.play();
            document.getElementById("song").innerHTML = "Peter Pan";
        }
    }
    if(scoreRightWrist > 0.2){
        circle(rightWristX,rightWristY,20);
        song1.stop();
        if(statusOfTheSong2 = false){
            song2.play();
            document.getElementById("song").innerHTML = "Harry Potter Theme";
        }
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY + " scoreLeftWrist = " + scoreLeftWrist);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY + " scorerightWrist = " + scorerightWrist);
    }
}
