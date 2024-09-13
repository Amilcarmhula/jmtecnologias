import './footer.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <span>info@jm-tecnologias.co.mz</span>
                <span>&copy; 2023 - {new Date().getFullYear()} <a href="https://www.jm-tecnologias.co.mz">JM-Tecnologias</a></span>
                <span>B.P.Lumumba, av. Acordos de lusaka, nr. 200 Q nr. 2</span>
            </footer>

        </>
    );
}

export default Footer