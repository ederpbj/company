import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';
import {auth} from './../firebase-config'

class Admin extends Component{
    constructor(props){
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null 
        }
    }

    componentDidMount(){
        //verifica se está logado
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,

                //(!!) Se tiver um usuário vira true, se não vira false
                estaAutenticado: !! user,
                //como é o mesmo nome, se true, armazena usuário
                user
            })
        })
    }

    render(){
        if(this.state.estaLogando){
            return <p>aguarde ...</p>
        }
        if(!this.state.estaAutenticado){
            return <Redirect to='/login' />
        }

        return(
            <div>
                <h2>Painel Administrativo</h2>
                <Route path={`/`} component={AdminMenu} />
                {/**Esperando a rota */}
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />

                {/*<p>{JSON.stringify(this.props)}</p> */}
            </div>

        );
    }
}

export default Admin