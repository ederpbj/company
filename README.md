# company
Criando site reactjs com template, firebase

>Limpar o projeto no git

    git remote rm origin
    git remote -v

>Enviar projeto para git

    git remote add origin https://github.com/ederpbj/company.git
    git push -u origin master


----Como era feito git-----
>Clonar
	git clone https://github.com/ederpbj/SiteForm.git

>Criar projeto

	create-react-app site-form --use-npm

>Testar

	cd site-form

	npm start


>Baixar template bootstrap

	https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp
    

>Iniciando projeto

	create-react-app company --use-npm

>Acessar pasta

    cd company
    yarn start

>Pegando template

Copiando links no index.html

    <!--
      Links para estilos
    -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="%PUBLIC_URL%/estilo.css" /> 

Alteranto app.js

    - apagar referencias padrão

Criar src/Site.js

Colar e converter html para JSX

    <nav class="navbar navbar-default navbar-fixed-top">

    até

    <footer class="container-fluid text-center">

    Mudar  class para className
    Mudar " por '
    Mudar <!-- para {/*
    Mudar --> para */}
    Mudar <br> por <br />
    Fechar o <images />
    Remover o style
    Remover slideanim

colocar div

    <div>Todo conteudo</div>

Remover referencias google maps

Atualizar app.js

    import React from 'react';
    import Site from './Site'

    function App() {
    return (
        <div className="App">

        <Site />
                
        </div>
    );
    }

    export default App;


>Criar component/Rodape.js

    import React from 'react'

    const Rodape = props => {
        return (
            
        )
    }

    export default Rodape

>Criar cabecalho

    Pegar o nav

>Criar componets/Inicio

    Copiar do Site.js 
    para Inicio.js
    Atualizar app.js

>Criar componets/servicos

    Criar Servicos.js
    Copiar de site 
    Colar no Servicos.js

>Rotas separando as páginas

    yarn add react-router-dom

>Colar company no cabecalho para aparecer em todas as páginas

    <div className='jumbotron text-center'>
                <h1>Company</h1> 

>Criar link no cabecalho

    import { Link } from 'react-router-dom'

>Criar componets/portfolio estático

    Criar Portfolio.js
    Colar de Site.js
    Altera App.js route
    Adiciona no cabeçalho o Link

>Criar componets/precos estático

    Criar Precos.js
    Colar de Site.js
    Altera App.js route
    Adiciona no cabeçalho o Link

>Criando página Admin

    Criar em src/admin/Admin.js
    criar link no app.js

>Criar src/admin/AdminMenu

    criar e importar pelo Admin
    colar do bootstraap

    https://getbootstrap.com/docs/4.3/components/list-group/

>Iniciando com firebase

    yarn add firebase re-base

colar no firebase-config

    var firebaseConfig = {
        apiKey: "AIzaSyBteKHypn_THTV9FVq5zlILSWHX4taCdIs",
        authDomain: "company-portfolio-dea2f.firebaseapp.com",
        databaseURL: "https://company-portfolio-dea2f.firebaseio.com",
        projectId: "company-portfolio-dea2f",
        storageBucket: "",
        messagingSenderId: "356335014859",
        appId: "1:356335014859:web:20e4a283f37ab15d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


>Startar com yarn

    yarn start

>Transformando Portifolio.js em uma classe

    Alterar:

    import React, { Component } from 'react'
    const Portfolio = props => {

    por:

    class Portfolio extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
        )
    }

>Importar para Portfolio.js


    import config from './../firebase-config'

>Correção de erro firebase

    1. Do npm uninstall firebase
    2. npm cache clear
    3. npm i firebase@^4.8.0 --save

>Aula 40 hospedando

    npm install -g firebase-tools
    firebase login
    firebase init
    

    ver telas

>Para finalizar configuração do host

em produção repetir processo

    yarn build
    firebase deploy



>Após build msg

    -----obs------
    
    npm install -g serve
    serve -s build
    https://bit.ly/CRA-deploy