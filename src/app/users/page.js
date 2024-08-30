'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
    const [items, setItems] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        // If there's no token, redirect to the signin page
        if (!token) {
            router.push('/signin');
            return;
        }

        async function getUsers() {
            try {
                const res = await fetch('https://backend-lime-nine.vercel.app/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });

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
    }, [router]);

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                const res = await fetch(`/api/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Fetched Users</h1>
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li key={index} className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div className="ml-4">
                                <p className="text-lg font-bold text-gray-700">ItemId: {item.id}</p>
                                <p className="text-lg font-semibold text-gray-700">Username: {item.username}</p>
                                <p className="text-gray-500">FirstName: {item.firstname}</p>
                                <p className="text-gray-500">LastName: {item.lastname}</p>
                            </div>
                            <div className="flex space-x-2">
                                <Link href={`/users/edit/${item.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
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
