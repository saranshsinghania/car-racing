canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car1_width = 130;
var car1_height = 90;

var car2_width = 130;
var car2_height = 90;

var car1_X = 30;
var car1_Y = 50;

var car2_X = 30;
var car2_Y = 300;

var background_image = "racing.jpg";
var car2_image = "download.png";
var car1_image = "car1.png";


function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadbackground;
    background_image_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = uploadcar1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = uploadcar2;
    car2_image_tag.src = car2_image;

}

function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image_tag,car1_X,car1_Y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image_tag,car2_X,car2_Y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){
        car1_up();
        console.log("up arrwo key")
    }

    if(keyPressed == "40"){
        car1_down();
        console.log("down arrow key")
    }

    if(keyPressed == "37"){
        car1_left();
        console.log("left arrwo key")
    }

    if(keyPressed == "39"){
        car1_right();
        console.log("right arrwo key")
    }

    if(keyPressed == "87"){
        car2_up();
        console.log("key w")
    }

    if(keyPressed == "83"){
        car2_down();
        console.log("key s")
    }

    if(keyPressed == "65"){
        car2_left();
        console.log("key a")
    }

    if(keyPressed == "68"){
        car2_right();
        console.log("key d")
    }


}


function car1_up(){
    if(car1_Y >=0){
        car1_Y = car1_Y - 10;
        console.log("x=" + car1_X + ", y=" + car1_Y);
        uploadbackground();
        uploadcar1();
        uploadcar2()
    }
}

function car1_down(){
    if(car1_Y <=510){
        car1_Y = car1_Y + 10;
        console.log("x=" + car1_X + ", y=" + car1_Y);
        uploadbackground();
        uploadcar1();
        uploadcar2()
    }
}

function car1_left(){
    if(car1_X >=0){
        car1_X = car1_X - 10;
        console.log("x=" + car1_X + ", y=" + car1_Y);
        uploadbackground();
        uploadcar1();
        uploadcar2()
    }
}

function car1_right(){
    if(car1_X <=670){
        car1_X = car1_X + 10;
        console.log("x=" + car1_X + ", y=" + car1_Y);
        uploadbackground();
        uploadcar1();
        uploadcar2()
    }
}



