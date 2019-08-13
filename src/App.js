import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Site from './Site'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho';
import Inicio from './components/Inicio';
import Servicos from './components/Servicos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Inicio />
        <Servicos />
        
        
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
