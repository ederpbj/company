import React from 'react'

const AdminMenu = props =>{
    return(
        <div>
            <div className="list-group">
                <a href="/admin" className="list-group-item list-group-item-action active">
                    Selecione uma opção
                </a>
                <a href="/admin/portfolio" className="list-group-item list-group-item-action">Portfolio</a>
               
            </div>
        </div>
    )
}

export default AdminMenu