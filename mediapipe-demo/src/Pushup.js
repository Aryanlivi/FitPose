import calculateAngle from "./PoseUtility";
import { LANDMARK_NAMES } from "./PoseConstants";
function checkPushup(results,canvasCtx,canvasElement){// Calculate and display the angle between elbow and arm
    const leftShoulder = results.poseLandmarks[LANDMARK_NAMES['left_shoulder']];
    const leftElbow = results.poseLandmarks[LANDMARK_NAMES['left_elbow']];
    const leftWrist = results.poseLandmarks[LANDMARK_NAMES['left_wrist']];

    if (leftShoulder && leftElbow && leftWrist) {
        const angle = calculateAngle(leftShoulder, leftElbow, leftWrist);
        canvasCtx.font = '32px Arial';
        canvasCtx.fillStyle = 'red';
        canvasCtx.fillText(`Angle: ${angle.toFixed(2)}°`, leftShoulder.x * canvasElement.width, leftShoulder.y * canvasElement.height - 10);
    }
}

export default checkPushup;