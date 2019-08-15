import React, {Component} from 'react'

class Login extends Component {
    constructor(props){
        super(props)

        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario(){
        console.log(this.email.value, this.senha.value)
    }

    render(){
        return (
            <div className="container">
                <h1>Login</h1>
            
                <form>
                    <div className="form-group">
                        <label forhtml="email">Email</label>
                        <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="emial" aria-describedby="emailHelp" placeholder="nome@email.com"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label forhtml="exampleInputPassword1">Senha</label>
                        <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    
                    <button type="button" className="btn btn-primary" onClick={this.autenticaUsuario}>Acessar</button>
                </form>
            </div>
        )
    }
}

export default Login