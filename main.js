var canvas= new fabric.Canvas("canvas");
block_width=30;
block_height=30;
player_x=10;
player_y=200;
var player_objects=" "
var block_object=" "

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(100);
        player_objects.scaleToHeight(150);
        player_objects.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_objects);
    })
}

function block_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
    })
}
window.addEventListener("keydown", kd);

function kd(e){
    keynumber=e.keyCode;
    console.log(keynumber);

    if(keynumber==37){
        left();
        console.log("left is pressed")
    }
    if(keynumber==38){
        up();
        console.log("up is pressed")
    }
    if(keynumber==39){
        right();
        console.log("right is pressed")
    }
    if(keynumber==40){
        down();
        console.log("down is pressed")
    }
    if(keynumber==67){
        block_image("cloud.jpg");
        console.log("c is pressed")
    }
    if(keynumber==68){
        block_image("dark_green.png");
        console.log("d is pressed")
    }
    if(keynumber==71){
        block_image("ground.png");
        console.log("g is pressed")
    }
    if(keynumber==76){
        block_image("light_green.png");
        console.log("l is pressed")
    }
    if(keynumber==82){
        block_image("roof.jpg");
        console.log("r is pressed")
    }
    if(keynumber==84){
        block_image("trunk.jpg");
        console.log("t is pressed")
    }
    if(keynumber==89){
        block_image("yellow_wall.png");
        console.log("y is pressed")
    }
    if(keynumber==87){
        block_image("wall.jpg");
        console.log("w is pressed")
    }
    if(e.shiftKey==true && keynumber==80){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
        console.log("shift and p together are pressed")
    }
    if(e.shiftKey==true && keynumber==77){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
        console.log("shift and m are pressed together")
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_objects);
        player_update();
    }
}
function down(){
    if(player_y<=450){
        player_y=player_y+block_height;
        canvas.remove(player_objects);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_objects);
        player_update();
    }
}
function right(){
    if(player_x<=650){
        player_x=player_x+block_width;
        canvas.remove(player_objects);
        player_update();
    }
}
