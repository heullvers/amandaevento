import './Inscricao.css';

function Inscricao() {
  return (
      <div className="container" id="inscricao">
        <div className="inscricao">
            <h1>Inscrição</h1>
            <form className="formulario">
              <label className="custom-field three">
                  <input type="text" placeholder="&nbsp;" name="name"/>
                  <span className="placeholder">nome</span>
                  <span className="border"></span>
              </label>
              <label className="custom-field three">
                  <input type="text" placeholder="&nbsp;" name="email"/>
                  <span className="placeholder">email</span>
                  <span className="border"></span>
              </label>
            </form>
            <button className="botaoSubmit" type="submit">Inscrever</button>
        </div>
      </div>
      

  );
}

export default Inscricao;
