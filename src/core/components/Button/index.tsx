import React from 'react';
import './styles.css';

type Props = {
    label: string;
}

const Button = ({ label }: Props) => (
    <button className="btn-style">{label}</button>
);

export default Button;