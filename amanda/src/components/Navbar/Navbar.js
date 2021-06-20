import './Navbar.css';

    const menuzinho = () =>{
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
                    <a href="#" className="navbar__links" id="home-page">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#cronograma" className="navbar__links">Cronograma</a>
                </li>
                <li className="navbar__item">
                    <a href="#sobre" className="navbar__links" id="sobre">Sobre</a>
                </li>
                <li className="navbar__btn">
                    <a href="#cadastrar" className="button" id="cadastro">Inscrever-se</a>
                </li>


            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
