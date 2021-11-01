import React from 'react'

export default class Saudacao extends React.Component {

    state = {
        type: "Fala",
        nom: "Pedro"
    }

    setTipo(e){
        this.setState({type: e.target.value })
    }

    render(){
        const { type, nom} = this.state
        return (
            <div>
                <h1>{type} {nom}!</h1>
                <hr/>
                <input type="text" placeholder="Type..." 
                value={type} onChange={e => this.setTipo(e)}/>

                <input type="text" placeholder="Nom..." value={nom}/>
            </div>
        )
    }
}