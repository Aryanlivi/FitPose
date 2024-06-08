import React from 'react'
import './Signin.css'
import axios from "axios";
import { useNavigate } from 'react-router';

const HOST = '127.0.0.1:8000';
const SignIn = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Access form data
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        patchPlayerDetails(data)
        navigate('/');        
      };
      const patchPlayerDetails = async (data) => {
        try {
        const playerId = sessionStorage.getItem('playerId');
        const access_token = sessionStorage.getItem('access_token');
          const response = await axios.patch(`http://${HOST}/player/${playerId}/`, data, {
            headers: {
              'Authorization': `JWT ${access_token}`
            }
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'calc(8rem + 20px)', marginTop: '75px' }}>
                    <div className="content" style={{ width: '80vw' }}>
                        <div className="form-container">
                            <h2>Submit Your Information</h2>
                            <form onSubmit ={handleSubmit} id="userForm">
                                <div className="form-group">
                                    <label for="dob">Date of Birth</label>
                                    <input type="date" id="dob" name="dob" required />
                                </div>
                                <div className="form-group">
                                    <label for="weight">Weight</label>
                                    <input type="number" id="weight" name="weight" required />
                                </div>
                                <div className="form-group">
                                    <label for="height">Height</label>
                                    <input type="number" id="height" name="height" required />
                                </div>
                                <div className="form-group">
                                    <label for="country">Country</label>
                                    <select id="country" name="country" required>
                                        <option>Select a country</option>
                                        <option value='US'>United States</option>
                                        <option value='UK'>United Kingdom</option>
                                        <option value='CA'>Canada</option>
                                        <option value='AU'>Australia</option>
                                        <option value='NP'>Nepal</option>                                      
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="gender">Gender</label>
                                    <select id="gender" name="gender" required>
                                        <option>Select a gender</option>
                                        <option value='M'>Male</option>
                                        <option value='F'>Female</option>
                                        <option value='O'>Other</option>                                     
                                    </select>
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
        </div>
    )
}

export default SignIn;
