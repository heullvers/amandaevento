import './Navbar.css';

    const menuzinho = () =>{
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar__menu');

        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }

    const chamada = () =>{
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar__menu');

        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__container">
            <a href="#" id="navbar__logo">LOGO</a>
            <div className="navbar__toggle" id="mobile-menu" onClick={menuzinho}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#home" className="navbar__links" onClick={chamada}>Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#cronograma" className="navbar__links" onClick={chamada}>Cronograma</a>
                </li>
                <li className="navbar__item">
                    <a href="#sobre" className="navbar__links" onClick={chamada}>Sobre</a>
                </li>
                <li className="navbar__btn">
                    <a href="#inscricao" className="button" onClick={chamada}>Inscrever-se</a>
                </li>


            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
