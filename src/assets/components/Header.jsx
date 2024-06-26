import React from 'react';
import logoImg from '../quiz-logo.png';

function Header() {
    return (
        <header>
            <img src={logoImg} alt="Quiz Logo" />
            <h1>ReactQuiz</h1>
        </header>
    );
}

export default Header;