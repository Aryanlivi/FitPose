import React from 'react';
import PoseVideoDetection from './PoseVideoDetection'; // Assuming this is the file containing your PoseVideoDetection component

const ComparisonPose = () => {
    return (
        <div className="comparison-container">
            <div className="video-container">
                <h2>Video 1</h2>
                <PoseVideoDetection videoSource="./pushup.mp4" />
            </div>
            <div className="video-container">
                <h2>Video 2</h2>
                <PoseVideoDetection videoSource="./bad_pushup.mp4" />
            </div>
        </div>
    );
};

export default ComparisonPose;
