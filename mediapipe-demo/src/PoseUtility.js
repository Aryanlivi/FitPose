
//This is from Chatgpt.
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
    
    return Math.abs(180-angleDegrees);
}

export default calculateAngle;