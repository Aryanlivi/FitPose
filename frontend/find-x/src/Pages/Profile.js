import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <React.Fragment>
            {
                isAuthenticated && (
                    <div>
                        { user?.picture && <img src={user.picture} alt={user?.name} /> }
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default Profile;