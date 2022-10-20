import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../Firebase/Firebase';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'sujon' })

    const authInfo = { user }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;