export const LANDMARK_NAMES = {
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
  
export const NAME_BASED_CONNECTIONS = [
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
export const POSE_CONNECTIONS = NAME_BASED_CONNECTIONS.map(
    ([start, end]) => [LANDMARK_NAMES[start], LANDMARK_NAMES[end]]
);
