const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg);
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    // write code to fetch time from API
    var responseJSON = await response.json();
    //change the data in JSON format
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    // write code slice the datetime
    if (hour > 4 && hour < 7) {
        bg = "sunrise1.png";
    } else if (hour > 6 && hour < 8) {
        bg = "sunrise2.png";
    }else if (hour > 7 && hour < 10) {
        bg = "sunrise3.png";
    }else if (hour > 9 && hour < 12) {
        bg = "sunrise4.png";
    }else if (hour > 11 && hour < 14) {
        bg = "sunrise5.png";
    }else if (hour > 13 && hour < 16) {
        bg = "sunrise6.png";
    }else if (hour > 15 && hour < 18) {
        bg = "sunrise7.png";
    }else if (hour > 17 && hour < 19) {
        bg = "sunrise8.png";
    }else if (hour > 18 && hour < 20) {
        bg = "sunrise9.png";
    }else if (hour > 19 && hour < 22) {
        bg = "sunrise10.png";
    }else if (hour > 21 && hour < 23) {
        bg = "sunrise11.png";
    }else if (hour > 22 && hour < 25) {
        bg = "sunrise12.png";
    }else if (hour > 0 && hour < 5) {
        bg = "sunrise12.png";
    }
    
    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
