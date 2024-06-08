import React, { useEffect, useRef ,useState} from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import calculateAngle,{removeByindices} from '../constants/PoseUtility';
import { LANDMARK_NAMES, NAME_BASED_CONNECTIONS,POSE_CONNECTIONS } from '../constants/PoseConstants';
import checkPushup from '../constants/Pushup';
import checkSquat from '../constants/Squat';
import axios from 'axios';

//This is just for Testing.
const HOST = '127.0.0.1:8000'
const PoseDetectionPushup = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const textRef=useRef(null);
    const [count,setCount] = useState(0);
    const handleComplete=async()=>{
        const userId = sessionStorage.getItem('userId');
        //const access_token = sessionStorage.getItem('access_token');
        console.log(userId)
        console.log('count',count)

        axios.post(`http://${HOST}/tracking/personal/`,{'user':userId,'count':count,'exercise_type':1});
    }
    //const statusRef=useRef(null);
    const countRef=useRef(null);
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
            //const statusElement=statusRef.current
            const countElement=countRef.current
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
                    //showLandmarkNames(results,canvasCtx,canvasElement)
                    // let connectionColor='red';
                    // if(pushupOp.form){
                    //     connectionColor='green';
                    // }
                    connectParts(canvasCtx, results,'red')
                    const pushupOp=checkPushup(results, canvasCtx, canvasElement)
                    textElement.textContent="Start"
                    //statusElement.textContent=`Status:${pushupOp.status}`
                    countElement.textContent=`Count:${pushupOp.count}`
                    setCount(pushupOp.count);
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
            <br></br>
            <text ref={textRef} style={{fontSize:'50px'}}></text>
            <br></br>
            <text ref={countRef} style={{fontSize:'50px',marginTop:'40px'}}></text>
            <br></br>
            <button onClick={()=>{handleComplete()}}>Complete</button>
        </div>
        
        
    );
};

export default PoseDetectionPushup;
