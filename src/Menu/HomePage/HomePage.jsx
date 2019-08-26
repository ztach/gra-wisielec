import React from 'react';
import './HomePage.scss';
import ws from '../../images/info.jpg';


const HomePage = (props) => (
    <article className="Home">
        <h1 className="Home___title">GRA WISIELEC</h1>
        <section className="Home___text">
            <p>Gra polega na odgadnięciu hasła</p>
            <p>Aby przeczytać opis hasła trzeba kliknąć w przycisk "OPIS"</p>
        </section>
        <div className="Home___img">
            <img src={ws} alt="wisielec" sizes="40%" />
        </div>
    </article>

);

export default HomePage;

