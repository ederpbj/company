import React from 'react'

const Rodape = props => {
    return (
        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criando no curso do Reginaldo Santos usando template Bootstrap <a href='https://www.reginaldosantos.com.br' title='Reginaldo Santos'>www.reginaldosantos.com.br</a></p>
            <p>Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>
    )
}

export default Rodape