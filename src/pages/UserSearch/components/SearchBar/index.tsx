import Button from 'core/components/Button';
import React, { useState } from 'react';
import './styles.css';

type Props = {
    setUserProfile: Function;
}

const SeachBar = ({ setUserProfile }: Props) => {
    const [user, setUser] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleOnSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserProfile(user);
    }

    return (
        <div className="search-bar-container">
            <div className="search-title">
                Encontre um perfil Github
            </div>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text"
                    placeholder="Usuário Github" 
                    name="user" 
                    className="search-input" 
                    onChange={handleOnChange}
                    value={user}
                /><br />
                <Button label="Encontrar" />
            </form>
        </div>
    );
};

export default SeachBar;