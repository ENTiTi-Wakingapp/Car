/// <reference path="../wakingapp.d.ts" />

var startingPosition = new Vector3(0,0,0);
var endPosition = new Vector3(0,0,0);
var t = 0;
var multiplier = 0.8;
var direction = 1;
arrowObject = object;
pointingArrow = false;


function start() 
{ 
    arrowObject.enabled = false;
    startingPosition.x = arrowObject.transform.localPosition.x;
    startingPosition.y = arrowObject.transform.localPosition.y;
    startingPosition.z = arrowObject.transform.localPosition.z;
    endPosition = Vector3.add(arrowObject.transform.localPosition,Vector3.multiply(arrowObject.transform.up, 0.3));
}

function update(deltaTime) 
{ 
    lerpArrow(t);
    t+=deltaTime * multiplier;
    if(t >= 1)
    {
        direction *= -1;
        t = 0;
    }
}

pointing = function ()
{
    arrowObject.enabled = true;
}

function lerpArrow(t)
{
    if(direction == 1)
    {
        arrowObject.transform.localPosition = Vector3.lerp(startingPosition, endPosition, t);
    }
    else if(direction == -1)
    {
        arrowObject.transform.localPosition = Vector3.lerp(endPosition, startingPosition, t);
    }
}
