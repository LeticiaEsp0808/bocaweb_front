import './App.css';
import { Component } from 'react';
//import { Busca } from './components/Busca';
import { Header } from './components/Header/index.jsx';
import { Lista } from './components/Lista';
import { Footer } from './components/Footer/index.jsx';
class App extends Component{
  
  state = {
    busca: '',
    odas:[]
  }

  componentDidMount(){
    this.carregaODAs();
  }
  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }
  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }
  render(){
    return(
      <section className='container'>
        <Header
          busca={this.state.busca}
          buscaODA={this.buscaODA}
         />
        <Lista
          odas={this.state.odas}/>
        <div className='Footer'>
          <Footer/>
        </div>
      </section>

    )
  }
}
export default App;
