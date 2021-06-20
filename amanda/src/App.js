import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cronograma from './components/Cronograma/Cronograma';
import Sobre from './components/Sobre/Sobre';
import Inscricao from './components/Inscricao/Inscricao';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Cronograma></Cronograma>
      <Sobre></Sobre>
      <Inscricao></Inscricao>
    </>
  );
}

export default App;
