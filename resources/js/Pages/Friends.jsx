import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Layout}  from '../layout/Layout';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/friends').then(response => {
            setFriends(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Friends</h1>

            {loading && <div>Loading...</div>}

            {friends.map(friend => (
                <div key={friend.id}>
                    {friend.name}
                </div>
            ))}
        </div>
    );
}

Friends.layout = page => <Layout children={page} title="friends" />

export default Friends;