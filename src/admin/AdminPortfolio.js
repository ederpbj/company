import React, {Component} from 'react'

import firebase, {storage} from './../firebase-config'

class AdminPortfolio extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{padding: '120px'}}>
                <form>
                    <div className="form-group">
                        <label for="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo"  placeholder="Título" />
                    </div>
                    <div className="form-group">
                        <label for="descricao">Descrição</label>
                        <textarea class="form-control" id="descricao" rows="3"></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label for="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio