import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'

function NavBar() {

    const changeToggle = () => {
        // console.log('Clicked')

        var togglebtn =  document.getElementById('navMenu')
        // console.log(togglebtn.classList.value)
        if(togglebtn.classList.value === 'nav-menu'){
            togglebtn.classList += ' responsive'
        }else{
            togglebtn.classList = 'nav-menu'
        }
    }
    
    const changeHover = (id) => {
        const links = ['home', 'about', 'product', 'service','contact','login']
        var x = document.getElementById(id)
        links.forEach(element => {
            if(element !== id){
                document.getElementById(element).classList = 'link'
            }
        });
        x.classList += ' active'
        changeToggle()
    }
    return (
        <div className='nav-containerr'>
            <nav className='nav'>
                <div className='nav-logo'>
                    <p id='p-logo'>
                        JM- Tecnologias
                    </p>
                </div>
                <div className='nav-menu' id='navMenu'>
                    <ul>
                        <li><a href="#home-s" className='link active' id='home' onClick={() => changeHover('home')}>Inicio</a></li>
                        <li><a href="#about-s" className='link' id='about' onClick={() => changeHover('about')}> Sobre Nós</a></li>
                        <li><a href="#product-s" className='link' id='product' onClick={() => changeHover('product')}>Produtos</a></li>
                        <li><a href="#service-s" className='link' id='service' onClick={() => changeHover('service')}>Serviços</a></li>
                        <li><a href="#contact-s" className='link' id='contact' onClick={() => changeHover('contact')}>Contacte-nos</a></li>
                        <li><a href="#login-s" className='link' id='login' onClick={() => changeHover('login')}>Logar ou Registar-se</a></li>
                    </ul>
                </div>

                <div className='nav-btn'>
                    <p id='log' className='btn-log'>Logar ou Registar-se</p>
                </div>
                <div className='nav-menu-btn'>
                    <i className='bi bi-grid-3x3-gap-fill' onClick={() => changeToggle()}></i>
                </div>
            </nav>
        </div>
    );
}

export default NavBar