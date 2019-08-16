import React, {Component} from 'react'

import firebase, {storage} from './../firebase-config'

class AdminPortfolio extends Component{
    constructor(props){
        super(props)

        this.state = {
            estaGravando: false
        }

        this.gravaPortfolio = this.gravaPortfolio.bind(this);
    }

    gravaPortfolio(e){
        //Capturar os elementos
        const itemPortfolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem:this.imagem
        }

        this.setState({estaGravando: true})
        /* console.log("Vamos gravar tudo!!!!!")
        console.log(this.titulo.value)
        console.log(this.descricao.value)
        console.log(this.imagem.value) */

        //files -> retorna um array de arquivos
        const arquivo = itemPortfolio.imagem.files[0]
        //console.log(arquivo)

        //const {name, size, type} = arquivo
        const {name} = arquivo
        /* console.log("name, size, type")
        console.log(name, size, type) */

        //Pega a referência dentro do storage
        const ref = storage.ref(name)
        
        //Coloca arquivo dentro do firebase (Upload)
        ref.put(arquivo)
        //Após upload devolve esse objeto
            .then(img => {
                //console.log(img.metadata)
                //Pegar a referencia da URL dowload
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        //console.log(downloadURL)
                        
                        //Novo objeto portfolio
                        const novoPortfolio = {
                            titulo: itemPortfolio.titulo,
                            descricao: itemPortfolio.descricao,
                            imagem: downloadURL
                        }

                        //console.log(novoPortfolio)

                        //Gravar objeto no firebase
                        firebase.push('portfolio', {
                            data: novoPortfolio
                        })
                        this.setState({estaGravando: false})
                    })
            })


            //Evento dos botões submit, faz ele parar de atualizar página
            e.preventDefault()
    }

    render(){
        if(this.state.estaGravando){
            return (
                <div className="container">
                <p><span className="glyphicon glyphicon-refresh" />aguarde ...</p>
                </div>
            )
        }

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