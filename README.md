# company
Criando site reactjs com template, firebase


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

------------------ outras informações do firebase
company-portfolio

colar na parte inferior do <body>

        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="/__/firebase/6.3.5/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#reserved-urls -->

        <!-- Initialize Firebase -->
        <script src="/__/firebase/init.js"></script>
    
Executar comando

    npm install -g firebase-tools
    firebase login
    firebase init
    firebase deploy

Colar no infeior do body

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/6.3.5/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#config-web-app -->

    <script>
    // Your web app's Firebase configuration
    
    </script>
-------------------

>Startar com yarn

    yarn start