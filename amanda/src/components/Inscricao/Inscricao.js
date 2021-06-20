import './Inscricao.css';

function Inscricao() {
  return (
      <div className="container">
        <div className="inscricao">
            <h1>Inscrição</h1>
            <label class="custom-field three">
                <input type="text" placeholder="&nbsp;"/>
                <span class="placeholder">email</span>
                <span class="border"></span>
            </label>
            <label class="custom-field three">
                <input type="text" placeholder="&nbsp;"/>
                <span class="placeholder">nome</span>
                <span class="border"></span>
            </label>
            <button className="botaoSubmit" type="submit">Inscrever</button>
        </div>
      </div>
      

  );
}

export default Inscricao;
