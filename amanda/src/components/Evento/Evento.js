import './Evento.css';

function Evento() {
  return (
    <div className="services" id="services">
        <h1>Cronograma</h1>
        <div className="services__wrapper">
            <div className="services__card">
                <h2><i class="far fa-calendar-times icone"></i>05/07<br></br> MKT Digital e Nutrição</h2>
                <p>Estatratégias que utilizei para ganhar 10mil seguidores em menos de 1 ano</p>
            </div>
            <div className="services__card">
                <h2><i class="far fa-calendar-times icone"></i>06/07<br></br> Nutrição, a profissão do futuro</h2>
                <p>Criando possibilidades de atuação para o Nutricionista</p>
            </div>
            <div className="services__card">
                <h2><i class="far fa-calendar-times icone"></i>07/07<br></br> Criação de conteúdo na prática</h2>
                <p>Montando uma linha editorial e calendário de conteúdo para as redes sociais.</p>
            </div>
            <div className="services__card">
                <h2><i class="far fa-calendar-times icone"></i>08/07<br></br>Do empreendedorismo ao Marketing Digital</h2>
                <p>Tirando a ideia da caixola e colocando na prática.</p>
            </div>
        </div>
    </div>
  );
}

export default Evento;
