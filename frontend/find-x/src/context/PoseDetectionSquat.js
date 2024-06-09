import React, { useEffect, useRef } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import calculateAngle,{removeByindices} from '../constants/PoseUtility';
import { LANDMARK_NAMES, NAME_BASED_CONNECTIONS,POSE_CONNECTIONS } from '../constants/PoseConstants';
import checkPushup from '../constants/Pushup';
import checkSquat from '../constants/Squat';

//This is just for Testing.
const PoseDetectionSquat = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const textRef=useRef(null);

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
        }
        function connectParts(canvasCtx, results,color) {
            drawLandmarks(canvasCtx, results.poseLandmarks, { color: 'red', lineWidth: 2 });
            drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: color, lineWidth: 4 });
                    
                
            }
        


        function onResults(results) {
            const canvasElement = canvasRef.current;
            const canvasCtx = canvasElement.getContext('2d');
            const textElement=textRef.current
            updateCanvas(results,canvasCtx,canvasElement)
            
            if (results.poseLandmarks) {
                const selectedLeftParts=[LANDMARK_NAMES['left_shoulder'],LANDMARK_NAMES['nose'],LANDMARK_NAMES['left_ankle'],LANDMARK_NAMES['left_hip']]
                const selectedRightParts=[LANDMARK_NAMES['right_shoulder'],LANDMARK_NAMES['nose'],LANDMARK_NAMES['right_ankle'],LANDMARK_NAMES['right_hip']]
                const leftLandmarkVisibility = selectedLeftParts.every(landmark =>results.poseLandmarks[landmark].visibility>0.5);  
                const rightLandmarkVisibility = selectedRightParts.every(landmark =>
                    results.poseLandmarks[landmark].visibility>0.5
                );               
                const allLandmarksVisible=leftLandmarkVisibility||rightLandmarkVisibility
                // const allLandmarksVisible=true
                if(allLandmarksVisible){
                    // showLandmarkNames(results,canvasCtx,canvasElement)
                    const isGoodForm=checkPushup(results, canvasCtx, canvasElement)
                    let connectionColor='red';
                    if(isGoodForm){
                        connectionColor='green';
                    }
                    connectParts(canvasCtx, results,connectionColor)
                    checkSquat(results, canvasCtx, canvasElement)
                    textElement.textContent="Start"
                }             
                else{
                    textElement.textContent="Go Further away!"
                }
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
        <div className='border-2 rounded-full'>
            <video ref={videoRef} src="/pushup.mp4" width="0" height="0" controls />
            {/* <video ref={videoRef} src="/pushup.mp4" style={{ display: 'none' }} /> */}
            {/* <button onClick={() => videoRef.current && videoRef.current.play()}>Start Video</button> */}
            <canvas ref={canvasRef} width="640" height="480" />
            <text ref={textRef} style={{fontSize:'50px'}}></text>
            <br></br>
            <button 
                className='border-2' 
                // onClick={()=>{handleComplete()}}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 123, 255, 0.2)',
                    transition: 'background-color 0.3s',
                  }}        
            >
                Complete Squat
            </button>
        </div>
        
    );
};

export default PoseDetectionSquat;
