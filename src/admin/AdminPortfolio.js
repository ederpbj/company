import React, {Component} from 'react'

import firebase, {storage} from './../firebase-config'

class AdminPortfolio extends Component{
    constructor(props){
        super(props)

        this.gravaPortfolio = this.gravaPortfolio.bind(this);
    }

    gravaPortfolio(e){
        console.log("Vamos gravar tudo!!!!!")
        console.log(this.titulo.value)
        console.log(this.descricao.value)
        console.log(this.imagem.value)
        //Evento dos botões submit
        e.preventDefault()
    }

    render(){
        return(
            <div style={{padding: '120px'}}>
                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo"  placeholder="Título" ref={(ref) => this.titulo = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio