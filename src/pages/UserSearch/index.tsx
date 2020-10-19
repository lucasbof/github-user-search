import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import ProfileUserLoader from './components/Loaders/ProfileUserLoader';
import ProfileBar from './components/ProfileBar';
import SeachBar from './components/SearchBar';
import './styles.css';

const UserSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();

    const setUserProfile = (user: string) => {
        setIsLoading(true);
        makeRequest(user)
        .then(response => {
            if(response.data.login) {
                setUser({
                    ...response.data
                });
            }
            else {
                setUser(undefined);
            }
        })
        .catch(() => { setUser(undefined) })
        .finally(() => {
            setIsLoading(false);
        });     
    };

    return (
        <div className="user-search-container">
            <SeachBar setUserProfile={setUserProfile} />
            {isLoading ? <ProfileUserLoader /> : user ? <ProfileBar user={user} /> : <></>}
        </div>
    );
}

export default UserSearch;