function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()
posenet=ml5.poseNet(video , modelloaded);
posenet.on("pose",getpose);
}
function getpose(results){
    if(results.length>0){
console.log(results);
console.log('nose x'+results[0].pose.lip.x);
console.log('nose y'+results[0].pose.lip.y);
    }
}
function modelloaded(){
    console.log("poseNet is loaded");
}
function draw(){
image(video,0,0,300,300);
}
function sanpshot(){
    save("newpic.jpg");
}