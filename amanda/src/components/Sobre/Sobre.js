import './Sobre.css';
import About from '../../images/about.png'

function Sobre() {
  return (
      <div className="sobre" id="sobre">
          <h1>Sobre</h1>
          <div className="sobre__wrapper">
            <div className="imagem">
              <img src={About} className="amanda flex-item" alt="foto explicativa da amanda"></img>
            </div>

            <div className="textinho">
              <p className="sobre-texto">Irure consectetur ea ipsum veniam do laborum consectetur enim magn
                a consectetur cupidatat consectetur. Incididunt consectetur laboris
                 consectetur sint voluptate ex irure culpa tempor. Nulla ut elit dol
                 or sit ipsum exercitation dolore laborum. Labore elit nulla incididu
              </p>
            </div>       
          </div>
      </div>
    
  );
}

export default Sobre;
