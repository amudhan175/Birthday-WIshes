var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
bdayimage="";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
     bdayimage=Img;
     bdayimage.scaleToWidth(850);
     bdayimage.scaleToHeight(800);
     bdayimage.set({
         top:0,left:0
     });
     canvas.add(bdayimage);
    });
	
}

function playSound(){
	x.play()
}
