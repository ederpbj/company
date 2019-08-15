import React, {Component} from 'react'

class Login extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{padding: '130px'}}>
                <h1>Login</h1>
            
                <form>
                    <div className="form-group">
                        <label forHtml="email">Email</label>
                        <input type="email" className="form-control" id="emial" aria-describedby="emailHelp" placeholder="nome@email.com"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label forHtml="exampleInputPassword1">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Acessar</button>
                </form>
            </div>
        )
    }
}

export default Login