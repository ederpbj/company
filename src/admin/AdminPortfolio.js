import React, {Component} from 'react'

import firebase, {storage} from './../firebase-config'

class AdminPortfolio extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>Portfolio - área administrativa</h2>
            </div>
        )
    }
}

export default AdminPortfolio