import React from 'react'

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        props.onAuth({ username: value, secret: value });
    };
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className='form-title'>Welcome</div>
                <div className='form-submit'>Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage
