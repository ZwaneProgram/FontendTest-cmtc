'use client';
import { useState } from 'react';

export default function Page() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const res = await fetch('https://backend-lime-nine.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, username, password }),
            });
    
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await res.json();
            console.log(result);
    
            // Refresh the page
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-success text-white text-center">
                            <h3 className="mb-0">SignUp Form</h3>
                        </div>
                        <div className="card-body">
                            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstname"
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastname"
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-person-bounding-box"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassWord(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    <i className="bi bi-box-arrow-right"></i> Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
