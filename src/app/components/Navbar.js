'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.username);
      } catch (error) {
        console.error('Invalid token', error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage and reset username
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUsername(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Smeeta</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-item mx-4">
              <Link href="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/Service" className="nav-link">Service</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/Contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="d-flex">
            {username ? (
              <>
                <span className="navbar-text me-3 fw-bold">Welcome, <strong>{username}</strong></span>
                <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <button className="btn btn-outline-primary me-2">SignUp</button>
                </Link>
                <Link href="/signin">
                  <button className="btn btn-outline-secondary">SignIn</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
