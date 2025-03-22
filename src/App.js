import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
    const [user, setUser] = useState(null);

    const handleUserJoin = (newUser) => {
        setUser(newUser);
    };

    return (
        <div className="App">
            <Navbar user={user} />
            {!user ? (
                <Join onUserJoin={handleUserJoin} />
            ) : (
                <Chat user={user} />
            )}
        </div>
    );
}

export default App;