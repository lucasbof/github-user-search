import AdditionalCard from 'pages/UserSearch/components/ProfileBar/components/AdditionalCard';
import Button from 'core/components/Button';
import React from 'react';
import MainInfoCard from './components/MainInfoCard';
import './styles.css';

type Props = {
    user: any;
}

const ProfileBar = ({ user }: Props) => {
    const additionalItems = [ 
                                { field: 'Repositórios públicos', info: user.public_repos }, 
                                { field: 'Seguidores', info: user.followers },
                                { field: 'Seguindo', info: user.following }, 
                            ];
    return (
        <div className="profile-bar-container">
            <div className="content-area">
                <div className="image-area">
                    <img src={user?.avatar_url} alt={user?.login}/>
                    <div className="button-container">
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            <Button label="Ver perfil" />
                        </a>
                    </div>
            </div>
                </div>
                <div className="info-area">
                    <div className="additional-info-area">
                        {additionalItems.map(item => (
                            <AdditionalCard key={item.field} info={`${item.field}: ${item.info}`} />
                        ))}
                    </div>
                    <div className="main-info-area">
                        <MainInfoCard user={user} />
                    </div>
                </div>
        </div>
    );
}

export default ProfileBar;