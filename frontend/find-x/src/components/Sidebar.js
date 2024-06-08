import {React ,useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { competition, profile, tools, house, person } from '../assets';
import { Link } from 'react-router-dom';
import axios from "axios";

const HOST='127.0.0.1:8000';
const Sidebar = () => {

    const { loginWithRedirect, isAuthenticated, logout,user } = useAuth0();

    const handleLogin = () => {        
        loginWithRedirect();        
    }
    useEffect(() => {
        console.log("Is the user authenticated: ", isAuthenticated);
        console.log(user);
        loginWithDjango();
    })

    const loginWithDjango = async () => {
        let response; 
        try{
            response = await axios.post(`http://${HOST}/user/login/`,user);
        }catch(error){
            console.log("FUCK THIS SHIT");
            console.log(error);
        }
        console.log(response);               
    }
    return (
        <nav>
            <div 
                style={{ marginTop: '10px', height: '100vh', borderRadius: '50px',marginLeft:'10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}} 
                className="bg-gray-700 text-white w-32 p-4 fixed left-0 top-16 z-10"
            > 
            <ul>
                <li style={{ margin: '40px', marginBottom:'0px'}}>
                    <Link to="/">
                        <img src={ house } alt='house_logo' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px' }} />
                    </Link>
                </li>

                <li style={{ margin: '40px', marginBottom:'0px'}}>
                    <Link to="/pose">
                        <img src={ tools } alt='tools_logo'  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px' }}/>
                    </Link>
                </li>

                <li style={{ margin: '40px', marginBottom:'0px'}}>
                    <Link to="/compete">
                        <img src={ competition } alt='competition_logo'  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px' }}/>
                    </Link>
                </li>

                <li style={{ margin: '40px', marginBottom:'0px'}}>
                    {
                        !isAuthenticated ? (
                                <button onClick={() => loginWithRedirect()}>
                                    <img src={ profile } alt='house_logo'  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px' }} />
                                </button>
                        ) : (
                            <Link to="/">
                                <button onClick={() => logout()}>
                                    <img 
                                        src={ person } 
                                        alt='house_logo' 
                                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px'  }}
                                    />
                                </button>
                            </Link>
                        )   
                    }
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Sidebar;