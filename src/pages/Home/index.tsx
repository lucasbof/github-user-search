import Button from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">Desafio do Capítulo 3,<br/> Bootcamp DevSuperior</h1>
        <div className="home-info">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="home-info-email">antforfigma@gmail.com</span></p>
        </div>
        <div className="home-btn">
            <Link to="/search">
                <Button label="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;