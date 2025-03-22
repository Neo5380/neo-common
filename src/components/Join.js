import React, { Component } from 'react';

class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            error: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validateInput = () => {
        const { username, email } = this.state;
        if (!username || !email) {
            this.setState({ error: 'All fields are required.' });
            return false;
        }
        // Additional validation can be added here
        this.setState({ error: '' });
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateInput()) {
            // Submit join request logic here
            console.log('User joined:', this.state.username, this.state.email);
        }
    }

    render() {
        const { username, email, error } = this.state;

        return (
            <div className="join-container">
                <h2>Join the Neo Common Community</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Join</button>
                </form>
            </div>
        );
    }
}

export default Join;