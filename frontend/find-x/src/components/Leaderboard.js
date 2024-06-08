import leaderboardData from './leaderBoardData';
import axios from "axios";
import {useState, useEffect} from "react";
import process from 'process';

const HOST = process.env.HOST;
const Leaderboard = () => {

    const [filter, setFilter] = useState('all'); // State for first dropdown
    // const [filter2, setFilter2] = useState('all'); // State for second dropdown

    useEffect(() => {
        getExercises();
    }, []);
    const getExercises = async () => {
        const response = await axios.get(`http://${HOST}/tracking/exercises`);
        print(response);
    }

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilter(value);
        
    };

    // const filteredData = () => {
    //     let filtered = leaderboardData;
    //     if (filter1 !== 'all') {
    //       filtered = filtered.filter(player => player[filter1] > 0);
    //     }
    //     if (filter2 !== 'all') {
    //       filtered = filtered.filter(player => player[filter2]);
    //     }
    //     return filtered;
    // };

    return (
        <div className="">
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        <div className="mb-4 flex justify-normal m-2">
            <select
            value={filter1}
            onChange={(e) => handleFilterChange(e, 'filter1')}
            className='border-2 rounded mr-2'
            >
            <option value="all">All Exercises</option>
            <option value="pushup">Push Up</option>
            <option value="squat">Squat</option>
            </select>
            <select
            value={filter2}
            onChange={(e) => handleFilterChange(e, 'filter2')}
            className='border-2 rounded mr-2'
            >
            <option value="all">All Modes</option>
            <option value="competitive">Competitive</option>
            <option value="normal">Normal</option>
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
            {filteredData().map((player) => (
                <tr key={player.id}>
                <td className="p-2">{player.name}</td>
                <td className="p-2">{player.score}</td>
                <td className="p-2">{player.badge}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Leaderboard;
