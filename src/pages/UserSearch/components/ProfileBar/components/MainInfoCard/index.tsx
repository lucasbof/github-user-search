import MainInputCard from 'pages/UserSearch/components/ProfileBar/components/MainInputCard';
import React from 'react';
import './styles.css';
import daysjs from 'dayjs';

type Props = {
    user: any;
}

const MainInfoCard = ({ user }: Props) => {
    const itemsInfo = [
        { field: 'Empresa', info: user.company },
        { field: 'Website/Blog', info: user.blog },
        { field: 'Localidade', info: user.location },
        { field: 'Membro desde', info: daysjs(user.created_at).format('DD/MM/YYYY') },
    ];
    return (
        <div className="main-info-container info-card-base">
            <div className="main-info-title">
                Informações
            </div>
            <div className="main-info-cards">
                {itemsInfo.map(item => (
                    <MainInputCard key={item.field} field={item.field} info={item.info} />
                ))}
            </div>
        </div>
    );
}

export default MainInfoCard;