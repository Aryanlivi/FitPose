import React, { useEffect, useRef } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

const LANDMARK_NAMES = {
  nose: 0,
  left_eye_inner: 1,
  left_eye: 2,
  left_eye_outer: 3,
  right_eye_inner: 4,
  right_eye: 5,
  right_eye_outer: 6,
  left_ear: 7,
  right_ear: 8,
  mouth_left: 9,
  mouth_right: 10,
  left_shoulder: 11,
  right_shoulder: 12,
  left_elbow: 13,
  right_elbow: 14,
  left_wrist: 15,
  right_wrist: 16,
  left_pinky: 17,
  right_pinky: 18,
  left_index: 19,
  right_index: 20,
  left_thumb: 21,
  right_thumb: 22,
  left_hip: 23,
  right_hip: 24,
  left_knee: 25,
  right_knee: 26,
  left_ankle: 27,
  right_ankle: 28,
  left_heel: 29,
  right_heel: 30,
  left_foot_index: 31,
  right_foot_index: 32
};

const NAME_BASED_CONNECTIONS = [
  ['nose', 'left_eye_inner'], ['left_eye_inner', 'left_eye'], ['left_eye', 'left_eye_outer'], ['left_eye_outer', 'left_ear'],
  ['nose', 'right_eye_inner'], ['right_eye_inner', 'right_eye'], ['right_eye', 'right_eye_outer'], ['right_eye_outer', 'right_ear'],
  ['mouth_left', 'mouth_right'], ['left_shoulder', 'right_shoulder'], ['left_shoulder', 'left_elbow'], ['left_elbow', 'left_wrist'],
  ['left_wrist', 'left_pinky'], ['left_wrist', 'left_index'], ['left_wrist', 'left_thumb'], ['right_shoulder', 'right_elbow'],
  ['right_elbow', 'right_wrist'], ['right_wrist', 'right_pinky'], ['right_wrist', 'right_index'], ['right_wrist', 'right_thumb'],
  ['left_shoulder', 'left_hip'], ['right_shoulder', 'right_hip'], ['left_hip', 'right_hip'], ['left_hip', 'left_knee'],
  ['left_knee', 'left_ankle'], ['left_ankle', 'left_heel'], ['left_heel', 'left_foot_index'], ['right_hip', 'right_knee'],
  ['right_knee', 'right_ankle'], ['right_ankle', 'right_heel'], ['right_heel', 'right_foot_index']
];

// Convert name-based connections to index-based connections
const POSE_CONNECTIONS = NAME_BASED_CONNECTIONS.map(
  ([start, end]) => [LANDMARK_NAMES[start], LANDMARK_NAMES[end]]
);

function calculateAngle(A, B, C) {
  // Calculate vectors AB and BC
  const AB = { x: B.x - A.x, y: B.y - A.y };
  const BC = { x: C.x - B.x, y: C.y - B.y };
  
  // Calculate the dot product of AB and BC
  const dotProduct = AB.x * BC.x + AB.y * BC.y;
  
  // Calculate the magnitudes of AB and BC
  const magnitudeAB = Math.sqrt(AB.x * AB.x + AB.y * AB.y);
  const magnitudeBC = Math.sqrt(BC.x * BC.x + BC.y * BC.y);
  
  // Calculate the cosine of the angle
  const cosTheta = dotProduct / (magnitudeAB * magnitudeBC);
  
  // Calculate the angle in radians
  const angleRadians = Math.acos(cosTheta);
  
  // Convert the angle to degrees
  const angleDegrees = angleRadians * (180 / Math.PI);
  
  return angleDegrees;
}

const PoseDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      smoothSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    function onResults(results) {
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext('2d');

      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      if (results.poseLandmarks) {
        // Draw connectors
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: 'white', lineWidth: 4 });

        // Draw landmarks
        drawLandmarks(canvasCtx, results.poseLandmarks, { color: 'red', lineWidth: 2 });

        // Annotate landmarks with names
        for (let i = 0; i < results.poseLandmarks.length; i++) {
          const landmark = results.poseLandmarks[i];
          const name = Object.keys(LANDMARK_NAMES).find(key => LANDMARK_NAMES[key] === i);

          canvasCtx.font = '10px Arial';
          canvasCtx.fillStyle = 'blue';
          //canvasCtx.fillText(name, landmark.x * canvasElement.width, landmark.y * canvasElement.height);
        }

        // Calculate and display the angle between elbow and arm
        const leftShoulder = results.poseLandmarks[LANDMARK_NAMES['left_shoulder']];
        const leftElbow = results.poseLandmarks[LANDMARK_NAMES['left_elbow']];
        const leftWrist = results.poseLandmarks[LANDMARK_NAMES['left_wrist']];

        if (leftShoulder && leftElbow && leftWrist) {
          const angle = calculateAngle(leftShoulder, leftElbow, leftWrist);
          canvasCtx.font = '32px Arial';
          canvasCtx.fillStyle = 'red';
          canvasCtx.fillText(`Angle: ${angle.toFixed(2)}°`, leftElbow.x * canvasElement.width, leftElbow.y * canvasElement.height - 10);
        }
      }

      canvasCtx.restore();
    }

    pose.onResults(onResults);

    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await pose.send({ image: videoRef.current });
        },
        width: 640,
        height: 480
      });
      camera.start();
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default PoseDetection;
