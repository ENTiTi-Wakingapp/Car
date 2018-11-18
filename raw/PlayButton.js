/// <reference path="../entiti.d.ts" />

var count = 0;

function start() 
{ 
    object.button.onPressed = buttonPressed1;
}

function buttonPressed1()
{
    buttonPressed = true;
    var car = findObjectByName("Car");
    car.animation.play();
    count+=1;

    if(count==2){
        shouldLerp = true;
    }
}
