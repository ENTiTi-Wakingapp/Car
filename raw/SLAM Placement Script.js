/// <reference path="../entiti.d.ts" />
var placementMode = true;
var lastTouchCount = 0;
touchedButton = false;

function update(deltaTime) 
{ 
    if(touchedButton == true)
    {
        //if the button has been touched, toggle placement mode
        placementMode = !placementMode;
        touchedButton = false;
    }

    if(placementMode)
    {
        var SLAMintersectionPoint = getIntersectionPointSLAM(); //obtain SLAM intersection point with the detected surface
        if(SLAMintersectionPoint != null)
        {
            object.transform.position = SLAMintersectionPoint;
        }
    }
}
