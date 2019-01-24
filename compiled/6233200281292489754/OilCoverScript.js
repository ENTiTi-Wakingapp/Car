/// <reference path="../wakingapp.d.ts" />

var objectStartingRotation;
var objectEndRotation = new Vector3(-100, 0, 0);
var z = 0;
triggerOilCover = false;

function start() 
{ 

}

function update(deltaTime) 
{ 
    if(triggerOilCover == true)
    {
        getStartingRotation();
        lerpObject(deltaTime);
    }
}

function lerpObject(deltaTime) {
    z += deltaTime;
    object.transform.localRotation = Vector3.lerp(objectStartingRotation, objectEndRotation, z);

    if (z > 1) {
        object.transform.localRotation = objectEndRotation;
        triggerOilCover = false;
    }
}

function getStartingRotation(){
    objectStartingRotation = object.transform.localRotation;
}
