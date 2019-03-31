    /// <reference path="../wakingapp.d.ts" />

var carObject = findObjectByName("Car");
var shouldRotate = false;
const speed = 50;

object.button.onPressed = function() {
    shouldRotate=!shouldRotate;
}

function update(deltaTime) 
{ 
    if(shouldRotate)
    {
        carObject.transform.rotate(deltaTime * speed, Vector3.up);
    }
}