import calculateAngle from "./PoseUtility";
import { LANDMARK_NAMES } from "./PoseConstants";


function displayInCanvas(angle,bodypart,canvasCtx,canvasElement){
    canvasCtx.font = '32px Arial';
    canvasCtx.fillStyle = 'red';
    canvasCtx.fillText(`Angle: ${angle.toFixed(2)}°`, bodypart.x * canvasElement.width, bodypart.y * canvasElement.height - 10);
}
function displayPushup(canvasCtx,canvasElement,text){
    canvasCtx.font = '32px Arial';
    canvasCtx.fillStyle = 'red';
    canvasCtx.fillText(`${text}`, 250, 80);
}
function displayPushupCount(canvasCtx,canvasElement,count){
    canvasCtx.font = '32px Arial';
    canvasCtx.fillStyle = 'red';
    canvasCtx.fillText(`PushUp Count:${count}`, 10, 60);
}
let pushupState = 'up';
let pushupCount = 0; // Counter for completed pushups
function checkPushup(results,canvasCtx,canvasElement){// Calculate and display the angle between elbow and arm
    const leftShoulder = results.poseLandmarks[LANDMARK_NAMES['left_shoulder']];
    const leftElbow = results.poseLandmarks[LANDMARK_NAMES['left_elbow']];
    const leftWrist = results.poseLandmarks[LANDMARK_NAMES['left_wrist']];
    const rightShoulder = results.poseLandmarks[LANDMARK_NAMES['right_shoulder']];
    const rightElbow = results.poseLandmarks[LANDMARK_NAMES['right_elbow']];
    const rightWrist = results.poseLandmarks[LANDMARK_NAMES['right_wrist']];
    const nose =results.poseLandmarks[LANDMARK_NAMES['nose']];
    const leftHip =results.poseLandmarks[LANDMARK_NAMES['left_hip']];
    const rightHip =results.poseLandmarks[LANDMARK_NAMES['right_hip']];
    const leftKnee =results.poseLandmarks[LANDMARK_NAMES['left_knee']];
    const rightKnee =results.poseLandmarks[LANDMARK_NAMES['right_knee']];
    const leftFootIndex = results.poseLandmarks[LANDMARK_NAMES['left_foot_index']];
    const rightFootIndex = results.poseLandmarks[LANDMARK_NAMES['right_foot_index']];
    
    let leftArmAngle;
    let rightArmAngle;
    let leftHipAngle;
    let rightHipAngle;
    let isNoseBelow;
    
    if (rightShoulder && rightElbow && rightWrist) {
        rightArmAngle = calculateAngle(rightShoulder, rightElbow, rightWrist);    
    }
    
    if (leftShoulder && leftElbow && leftWrist) {
        leftArmAngle = calculateAngle(leftShoulder, leftElbow, leftWrist);
    }
    
    if(leftHip && leftShoulder && leftKnee){
        leftHipAngle = calculateAngle(leftShoulder, leftHip, leftKnee);
    }
    if(rightHip && rightShoulder && rightKnee){
        rightHipAngle = calculateAngle(rightShoulder, rightHip, rightKnee);
    }
    //elbow need to be above the nose
    if(nose.y>=leftElbow.y && nose.y>=rightElbow.y){
        isNoseBelow=true;
    }
    //starting position and end
    if (rightArmAngle>150 && rightArmAngle<200 && leftArmAngle>150 && leftArmAngle<200 && leftHipAngle>140 && rightHipAngle>140 && !isNoseBelow){
        if (pushupState === 'down') {
            pushupCount++; // Increment pushup count when transitioning from 'down' to 'up'
        }
        pushupState = 'up';
        displayPushup(canvasCtx,canvasElement,"Pushup Start")
    }
    //down in pushup
    if(rightArmAngle<70 && leftArmAngle <80 && leftHipAngle>100 && rightHipAngle>100 && isNoseBelow){
        pushupState = 'down';
        displayPushup(canvasCtx,canvasElement,"Pushup Ongoing")
    }
    
    displayInCanvas(leftHipAngle,leftHip,canvasCtx,canvasElement)
    displayInCanvas(rightHipAngle,rightHip,canvasCtx,canvasElement)

    displayPushupCount(canvasCtx,canvasElement,pushupCount);
}

export default checkPushup;