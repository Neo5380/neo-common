import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/join">Join</a></li>
                    <li><a href="/chat">Chat</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;