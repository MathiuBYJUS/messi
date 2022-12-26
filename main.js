object=[];
status="";

function preload()
{
 video=createVideo('messi.mp4');

}

function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video.hide();
}

function Start()

{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="se estan detectando objetos";

}

function modelLoaded()
{
    console.log("El modela esta cargado");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,result)
{
if (error)
{
    console.log(error);
}

else 
{
    console.log(result);
    object=result;

}
}

function draw()
{
    image(video, 0, 0, 640, 420);
    
    if(status!="")
    {objectDetector.detect(video,gotResult);
      for (var i=0; i < Objects.length; i++){
        document.getElementById("status").innerHTML="Estado : Detectando objetos";
        document.getElementById("objetos_detectados").innerHTML="El numero de objetos detectados es :" + object.length;
        fill("#FF0000");
        porcent=floor(Objects[i].confidence*100);
        text(objects[i].label+""+porcent+"%",objects[i].x+15,objects[i].y+15);
        rect(objects[i].label+""+porcent+"%",objects[i].x,objects[i].y);
        
      }
    }   
}
    
