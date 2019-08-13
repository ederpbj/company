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

colar do 

    <nav class="navbar navbar-default navbar-fixed-top">

    até

    <footer class="container-fluid text-center">

Mudar  class para className
Mudar " por '
Mudar <!-- para {/*
Mudar --> para */}
Mudar <br> por <br />


colocar div
<div>Todo conteudo</div>

- Remover referencias google maps