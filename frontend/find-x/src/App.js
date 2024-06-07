import logo from './logo.svg';
import './styles.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './Pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Pages/Home';

function App() {

  const { user } = useAuth0();

  console.log("Current User: ", user);

  return (
    <main>
      <Home />
      <Profile />
    </main>
  );
}

export default App;
