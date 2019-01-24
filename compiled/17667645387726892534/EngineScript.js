/// <reference path="../wakingapp.d.ts" />

var t = 0;
var multiplier = 2;
var EngineMaterial;
var objectStartingPosition;
var objectEndPosition = new Vector3(0, 0, 0);
var blinking = 0;
var z = 0;
var pointOnce = true;
var EngineObject = findObjectByName("Circle002_2");
buttonPressed = false;
shouldLerp = false;

function start() {
    EngineMaterial = EngineObject.mesh.material;
    objectStartingPosition = object.transform.localPosition;
    objectEndPosition.x = objectStartingPosition.x;
    objectEndPosition.y = objectStartingPosition.y+0.622125;
    objectEndPosition.z = objectStartingPosition.z+0.794416;
}

function update(deltaTime) {
    if (buttonPressed == true) {
        if (t > 1) {
            EngineMaterial.diffuse.g -= deltaTime * multiplier;
            EngineMaterial.diffuse.b -= deltaTime * multiplier;
            checkColor();
        }
        t += deltaTime;
    }


    if (shouldLerp) {
        lerpObject(deltaTime);
    }
}

function checkColor() {
    if (EngineMaterial.diffuse.g < 0) {
        EngineMaterial.diffuse.g = 0;
        EngineMaterial.diffuse.b = 0;
        multiplier *= -1;
        blinking += 1;
    }
    else if (EngineMaterial.diffuse.g > 1) {
        EngineMaterial.diffuse.g = 1;
        EngineMaterial.diffuse.b = 1;
        multiplier *= -1;
        blinking += 1;
    }
}

function lerpObject(deltaTime) {
    z += deltaTime;
    object.transform.localPosition = Vector3.lerp(objectStartingPosition, objectEndPosition, z);

    if (z > 1) {
        object.transform.localPosition = objectEndPosition;
        pointing();
        triggerOilCover = true;
    }
}

