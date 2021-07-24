const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 block_img_object="";

function new_image()
{
    fabric.Image.fromeURL(BithdayiImage.jpg,function(Img){
       block_img_object=Img;
       block_img_object.scaletowidth(700) 
       block_img_object.scaletowidth(516) 
       block_img_object.set({
           top:0,
           left:0

       });
       canvas.add(block_img_object);
    });

	
	
}

function playmusic(){
    x.play();
	
}
