import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {auth} from './../firebase-config'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

        //Variavel global
        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario(){
        this.setState({estaLogando: true, erro:false})

        //console.log(this.email.value, this.senha.value)

        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user => {
                console.log('Usuário logado: ', user)
                this.setState({estaAutenticado: true})
            })
            .catch(err => {
                //console.log('Error: ', err.code)
                //console.log(state.erro)
                //console.log("Esta logado: ", state.estaLogado)

                this.setState({erro: true, estaLogando:false, estaAutenticado:false})

                switch (err.code) {
                    case 'auth/user-not-found':
                        alert('Usuário não cadastrado!')
                        
                        break;

                    case 'auth/wrong-password':
                        alert('Senha incorreta!')
                        
                        break;

                    case 'auth/invalid-email':
                        alert('Digite um e-mail válido!')
                        
                        break;
                
                    default:
                        break;
                }
            })

           
    }

    render(){
        if(this.state.estaAutenticado){
            return <Redirect to='/admin' />
        }
        return (
            <div className="container">
                <h1>Login</h1>
            
                <form>
                    <div className="form-group">
                        <label forhtml="email">Email</label>
                        <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="emial" aria-describedby="emailHelp" placeholder="nome@email.com"/>
                    </div>
                    <div className="form-group">
                        <label forhtml="senha">Senha</label>
                        <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="senha" placeholder="Password"/>
                        { this.state.erro && <small id="emailHelp" className="form-text text-muted">E-mail e/ou senha invalidos!</small>}
  
                    </div>
                    
                    <button disabled={this.state.estaLogando} type="button" className="btn btn-primary" onClick={this.autenticaUsuario}>Acessar</button>
                </form>
            </div>
        )
    }
}

export default Login