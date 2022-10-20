import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>This is Home components</h1>
        </div>
    );
};

export default Home;