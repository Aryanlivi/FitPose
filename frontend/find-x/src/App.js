import logo from './logo.svg';
import './styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Pose from './Pages/Pose';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
<<<<<<< HEAD
import SignIn from './Pages/SignIn';

=======
import Signin from './Pages/Signin';
import Compete from './Pages/Compete';
>>>>>>> pranav

const Dashboard = () => <h1>Dashboard</h1>;
const Profile = () => <h1>Profile</h1>;
const Settings = () => <h1>Settings</h1>;
function App() {

  const { user } = useAuth0();

  console.log("Current User: ", user);

  return (
    <Router>
      <div>
          {/* <Navbar /> */}
          <Sidebar />
          <Routes>
              <Route path="/signin" exact element={<SignIn />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/pose" element={<Pose />} />
<<<<<<< HEAD
=======
              <Route path="/signin" element={<Signin />} />
              <Route path='/compete' element={<Compete />} />
>>>>>>> pranav
          </Routes>
      </div>
    </Router>
  );
}

export default App;
