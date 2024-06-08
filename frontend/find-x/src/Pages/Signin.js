import React from 'react'
import './Signin.css'

const Signin = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'calc(8rem + 20px)', marginTop: '75px' }}>
                    <div className="content" style={{ width: '80vw' }}>
                        <div className="form-container">
                            <h2>Submit Your Information</h2>
                            <form id="userForm">
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label for="age">Age</label>
                                    <input type="number" id="age" name="age" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>
                                <div className="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" id="address" name="address" required />
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
        </div>
    )
}

export default SignIn;