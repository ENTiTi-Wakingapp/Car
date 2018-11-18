/// <reference path="../entiti.d.ts" />

var objectStartingPosition;
var objectEndPosition = new Vector3(-100, 0, 0);
var z = 0;
triggerOilCover = false;

function start() 
{ 
    objectStartingPosition = object.transform.position;
}

function update(deltaTime) 
{ 
    if(triggerOilCover == true)
    {
        lerpObject(deltaTime);
    }
}

function lerpObject(deltaTime) {
    z += deltaTime;
    object.transform.rotation = Vector3.lerp(objectStartingPosition, objectEndPosition, z);

    if (z > 1) {
        object.transform.rotation = objectEndPosition;
    }
}
