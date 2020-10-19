import React from 'react';
import './styles.css';

type Props = {
    info: string;
}

const AdditionalCard = ({ info }: Props) => (
    <div className="additional-container info-card-base">
        {info}
    </div>
);

export default AdditionalCard;