import React from 'react';
import './styles.css';

type Props = {
    field: string;
    info: string;
}

const MainInputCard = ({ field, info }: Props) => (
    <div className="main-input-container">
        <strong>{field}</strong>: {info}
    </div>
);

export default MainInputCard;