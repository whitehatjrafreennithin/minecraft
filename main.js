var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });

}

function newImg(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });

}


window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    console.log("its working")
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("Shift and p pressed");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        console.log("Shift and p pressed");
    }



    if (e.shiftKey == true && keyPressed == "77") {
        console.log("Shift and m pressed");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        console.log("Shift and m pressed");
    }


    if (e.shiftKey == true && keyPressed == "66") {
        console.log("Shift and b pressed");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        console.log("Shift and b pressed");
    }

    
    if (keyPressed == "38") {
        up();
        console.log(up);

    }
    if (keyPressed == "40") {
        down();
        console.log(down);

    }
    if (keyPressed == "37") {
        left();
        console.log(left);

    }
    if (keyPressed == "39") {
        right();
        console.log(right);

    }



    if (keyPressed == "87") {
        newImg("wall.jpg");
        console.log("w");

    }
    if (keyPressed == "71") {
        newImg("ground.png");
        console.log("g");

    }
    if (keyPressed == "84") {
        newImg("trunk.jpg");
        console.log("t");

    }
    if (keyPressed == "67") {
        newImg("cloud.jpg");
        console.log("c");

    }
    if (keyPressed == "76") {
        newImg("light_green.png");
        console.log("l");

    }
    if (keyPressed == "82") {
        newImg("roof.jpg");
        console.log("r");

    }
    if (keyPressed == "68") {
        newImg("dark_green.png");
        console.log("d");

    }
    if (keyPressed == "89") {
        newImg("yellow_wall.png");
        console.log("y");

    }
    if (keyPressed == "85") {
        newImg("unique.png");
        console.log("u");

    }




}




function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;

        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow is pressed X = " + player_x + " Y = " + player_y);


        canvas.remove(player_object)
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;

        console.log("Block Image Height = " + block_image_height);
        console.log("When down arrow is pressed X = " + player_x + " Y = " + player_y);


        canvas.remove(player_object)
        player_update();
    }
}


function left() {
    if (player_x>= 0) {
        player_x = player_x - block_image_width;

        console.log("Block Image Width = " + block_image_width);
        console.log("When left arrow is pressed X = " + player_x + " Y = " + player_y);


        canvas.remove(player_object)
        player_update();
    }
}




function right() {
    if (player_x<=900) {
        player_x = player_x + block_image_width;

        console.log("Block Image Width = " + block_image_width);
        console.log("When right arrow is pressed X = " + player_x + " Y = " + player_y);


        canvas.remove(player_object)
        player_update();
    }
}