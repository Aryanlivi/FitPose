import React, { useEffect, useRef } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors } from '@mediapipe/drawing_utils';

const PoseDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize MediaPipe Pose instance
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
    });

    // Set options for Pose
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      smoothSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    // Function to handle results from Pose
    function onResults(results) {
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext('2d');

      // Clear the canvas
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      // Draw the video frame onto the canvas
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      // Draw pose landmarks
      if (results.poseLandmarks) {
        drawConnectors(canvasRef.current, results.poseLandmarks, pose.current)
        for (const landmark of results.poseLandmarks) {
          canvasCtx.beginPath();
          canvasCtx.arc(landmark.x * canvasElement.width, landmark.y * canvasElement.height, 5, 0, 2 * Math.PI);
          canvasCtx.fillStyle = 'red';
          canvasCtx.fill();
        }
      }

      canvasCtx.restore();
    }

    // Attach the onResults function to the Pose instance
    pose.onResults(onResults);

    // Setup the camera and start capturing video
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
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default PoseDetection;
