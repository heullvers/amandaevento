import './Home.css';
import Amanda from '../../images/design.png'

function Home() {
  return (
    <div className="home">
        <div className="texto flex-item">
            <h3><p>Seja <br></br><span className="bem">BEM-VINDO</span></p></h3>
        </div>
        <div className="imagem">
          <img src={Amanda} className="amanda flex-item"></img>
        </div>
        
    </div>
    
  );
}

export default Home;
