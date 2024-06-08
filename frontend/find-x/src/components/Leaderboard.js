import React, {useState} from 'react';
import leaderboardData from './leaderBoardData';

const Leaderboard = () => {

    const [filter1, setFilter1] = useState('all'); // State for first dropdown
    const [filter2, setFilter2] = useState('all'); // State for second dropdown

    const handleFilterChange = (e, filterType) => {
        const value = e.target.value;
        if (filterType === 'filter1') {
          setFilter1(value);
        } else if (filterType === 'filter2') {
          setFilter2(value);
        }
        // You can add logic here to fetch and update data based on filters
    };

    const filteredData = () => {
        let filtered = leaderboardData;
        if (filter1 !== 'all') {
          filtered = filtered.filter(player => player[filter1] > 0);
        }
        if (filter2 !== 'all') {
          filtered = filtered.filter(player => player[filter2]);
        }
        return filtered;
    };

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
