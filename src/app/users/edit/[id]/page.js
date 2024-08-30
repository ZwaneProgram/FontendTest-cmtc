'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditPage({ params }) {
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://backend-lime-nine.vercel.app/api/users/${id}`);
        if (res.ok) {
          const data = await res.json();
          console.log('Fetched user data:', data);
          if (data.length > 0) {
            const userData = data[0];
            setUser(userData);
            setFirstname(userData.firstname);
            setLastname(userData.lastname);
          } else {
            console.error('No user data found');
          }
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://backend-lime-nine.vercel.app/api/users/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstname, lastname, password }),
      });
      if (res.ok) {
        router.push('/users');
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="bg-white shadow-sm rounded p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="text-center mb-4">Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Current First Name</label>
            <input
              type="text"
              className="form-control bg-light"
              value={user.firstname || 'N/A'}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Current Last Name</label>
            <input
              type="text"
              className="form-control bg-light"
              value={user.lastname || 'N/A'}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
