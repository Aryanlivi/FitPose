import calculateAngle from "./PoseUtility";
import { LANDMARK_NAMES } from "./PoseConstants";

function displayInCanvas(angle,bodypart,canvasCtx,canvasElement){
    canvasCtx.font = '32px Arial';
    canvasCtx.fillStyle = 'red';
    canvasCtx.fillText(`Angle: ${angle.toFixed(2)}°`, bodypart.x * canvasElement.width, bodypart.y * canvasElement.height - 10);
}

let squatState = 'up';
let squatCount = 0; 
export default function checkSquat(results,canvasCtx,canvasElement){// Calculate and display the angle between elbow and arm
    const leftHip =results.poseLandmarks[LANDMARK_NAMES['left_hip']];
    const rightHip =results.poseLandmarks[LANDMARK_NAMES['right_hip']];
    const leftKnee =results.poseLandmarks[LANDMARK_NAMES['left_knee']];
    const rightKnee =results.poseLandmarks[LANDMARK_NAMES['right_knee']];
    const rightAnkle =results.poseLandmarks[LANDMARK_NAMES['right_ankle']];
    const leftAnkle =results.poseLandmarks[LANDMARK_NAMES['left_ankle']];
    const leftShoulder = results.poseLandmarks[LANDMARK_NAMES['left_shoulder']];
    const rightShoulder = results.poseLandmarks[LANDMARK_NAMES['right_shoulder']];
    let leftKneeAngle;
    let rightKneeAngle;
    let leftHipAngle;
    let rightHipAngle;
    if(leftAnkle &&leftHip &&leftKnee&&leftShoulder){
        leftKneeAngle=calculateAngle(leftHip,leftKnee,leftAnkle)
        leftHipAngle=calculateAngle(leftShoulder,leftHip,leftKnee)
    }
    if(rightAnkle &&rightHip &&rightKnee){
        rightKneeAngle=calculateAngle(rightHip,rightKnee,rightAnkle)
        rightHipAngle=calculateAngle(rightShoulder,rightHip,rightKnee)
    } 
    if(leftKneeAngle>165 && rightKneeAngle >165 && leftKneeAngle<360 && rightKneeAngle <360 ){

    }
    if(leftKneeAngle<90 && rightKneeAngle <90){
        
    };
        displayInCanvas(leftHipAngle,leftHip,canvasCtx,canvasElement)
        // displayInCanvas(rightHipAngle,rightKnee,canvasCtx,canvasElement)

    }

    