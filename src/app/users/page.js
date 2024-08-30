// frontend/pages/users.js

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UsersPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getUsers() {
            try {
                const res = await fetch('https://backend-lime-nine.vercel.app/api/users');
                if (!res.ok) {
                    console.error('Failed to fetch data');
                    return;
                }
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getUsers();
        const interval = setInterval(getUsers, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                const res = await fetch(`https://backend-lime-nine.vercel.app/api/users/${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setItems(items.filter(item => item.id !== id));
                    alert('User deleted successfully');
                } else {
                    console.error('Failed to delete user');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center p-5">
            <div className="w-100 max-w-3xl bg-white shadow-lg rounded p-4">
                <h1 className="text-center mb-4">Fetched Users</h1>
                <ul className="list-group">
                    {items.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-1">ItemId: {item.id}</h5>
                                <p className="mb-1"><strong>Username:</strong> {item.username}</p>
                                <p className="mb-1"><strong>FirstName:</strong> {item.firstname}</p>
                                <p><strong>LastName:</strong> {item.lastname}</p>
                            </div>
                            <div className="btn-group">
                                <Link href={`/users/edit/${item.id}`} className="btn btn-warning text-white">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
