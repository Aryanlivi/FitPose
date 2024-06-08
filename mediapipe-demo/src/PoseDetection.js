import React, { useEffect, useRef } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import calculateAngle from './PoseUtility';
import { LANDMARK_NAMES, NAME_BASED_CONNECTIONS,POSE_CONNECTIONS } from './PoseConstants';
import checkPushup from './Pushup';


//This is just for Testing.
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

        // Function to start video and process frames
        const startVideo = (video) => {
            const videoElement = video;
            // videoElement.play();
            videoElement.onloadeddata = () => {
                const onFrame = async () => {
                    if (!videoElement.paused && !videoElement.ended) {
                        console.log("work")
                        await pose.send({ image: videoElement }); // Send video frame to MediaPipe Pose
                        requestAnimationFrame(onFrame); // Process next frame
                    }
                };
                onFrame(); // Start processing frames
            };
        };
        function startCamera(){
            const camera = new Camera(videoRef.current, {
                onFrame: async () => {
                    await pose.send({ image: videoRef.current });
                },
                width: 640,
                height: 480
            });
            camera.start();
        }
        // function showLandmarkNames(results, canvasCtx, canvasElement) {
        //     // Annotate landmarks with names
        //     for (let i = 0; i < results.poseLandmarks.length; i++) {
        //         const landmark = results.poseLandmarks[i];
        //         const name = Object.keys(LANDMARK_NAMES).find(key => LANDMARK_NAMES[key] === i);
        //         canvasCtx.font = '10px Arial';
        //         canvasCtx.fillStyle = 'blue';
        //         canvasCtx.fillText(name, landmark.x * canvasElement.width, landmark.y * canvasElement.height);
        //     }
        // }
        function updateCanvas(results,canvasCtx,canvasElement){
            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            canvasCtx.drawImage(videoRef.current, 0, 0, canvasElement.width, canvasElement.height);
            // canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
        }
        function connectParts(canvasCtx, results) {
            // Draw connectors
            drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: 'white', lineWidth: 4 });

            // Draw landmarks
            drawLandmarks(canvasCtx, results.poseLandmarks, { color: 'red', lineWidth: 2 });
        }
        function onResults(results) {
            const canvasElement = canvasRef.current;
            const canvasCtx = canvasElement.getContext('2d');
            updateCanvas(results,canvasCtx,canvasElement)
            
            if (results.poseLandmarks) {
                // console.log(results)                
                connectParts(canvasCtx, results)
                // showLandmarkNames(results,canvasCtx,canvasElement)
                checkPushup(results, canvasCtx, canvasElement)
            }
            canvasCtx.restore();
        }

        pose.onResults(onResults);
        if (videoRef.current) {
            // startVideo(videoRef.current)
            startCamera(videoRef,pose)
        }
    }, []);

    return (
        <div>
            <video ref={videoRef} src="/pushup.mp4" width="640" height="480" controls />
            {/* <video ref={videoRef} src="/pushup.mp4" style={{ display: 'none' }} /> */}
            <button onClick={() => videoRef.current && videoRef.current.play()}>Start Video</button>
            <canvas ref={canvasRef} width="640" height="480" />
        </div>
    );
};

export default PoseDetection;
