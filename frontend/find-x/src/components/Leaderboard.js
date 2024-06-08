import leaderboardData from './leaderBoardData';
import { firstBadge, secondBadge, thirdBadge } from '../assets';
import axios from "axios";
import {useState, useEffect} from "react";


const HOST='127.0.0.1:8000';
const Leaderboard = () => {
    const [filter, setFilter] = useState([]); // State for list of exercises
    const [chosenValue, setChosenValue] = useState('');
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
      getExercises();        
  }, []);

  useEffect(() => {
    if (chosenValue) {
      getLeaderboard(chosenValue);
    }    
}, [chosenValue]);

  const getExercises = async () => {
      const response = await axios.get(`http://${HOST}/tracking/exercises/`);
      
      setFilter((prevFilter) => {
        const existingId = prevFilter.map((item) => item.id)
        const newData = response.data.filter((item) => !existingId.includes(item.id))
        const newFilter = [...prevFilter, ...newData];   
        console.log(newFilter);       
        setChosenValue(newFilter[0].id);
        return newFilter; 
      });              
  }

  const getLeaderboard = async (exercise_type) => {
      console.log("leader:")
      console.log(leaderboardData)
      const response = await axios.get(`http://${HOST}/tracking/leaderboard?exercise_type=${exercise_type}`);
      
      setLeaderboardData(response.data);
      console.log(response.data)
  } 

  const handleFilterChange = (e) => {
    const selectedOption = e.target.value;          
    setChosenValue(selectedOption); 
  };

  return (
    <div className="">
    <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
    <div className="mb-4 flex justify-normal m-2">
        <select
        value={chosenValue}
        onChange={(e) => handleFilterChange(e)}
        className='border-2 rounded mr-2'
        >              
          {filter.map((option) => (
            
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
     
        </select>               
        
    </div>
    <table className="w-full border-collapse">
        <thead>
        <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Score</th>
            <th className="p-2">Badge</th>
        </tr>
        </thead>
        <tbody>
        {leaderboardData.map((player) => (
            <tr key={player.id}>
            <td className="p-2">{player.username}</td>
            <td className="p-2">{player.personal_count+player.competitive_count}</td>
            <td className="p-2">{firstBadge}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);

};

export default Leaderboard;
