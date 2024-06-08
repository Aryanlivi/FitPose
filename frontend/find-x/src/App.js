import logo from './logo.svg';
import './styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';

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
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route path="/settings" component={Settings} />
          </Routes>
          <Home />
      </div>
    </Router>
  );
}

export default App;
