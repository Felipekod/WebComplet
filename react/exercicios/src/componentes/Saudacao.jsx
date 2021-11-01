import React from 'react'

export default class Saudacao extends React.Component {

    state = {
        type: this.props.type,
        nom: this.props.nom
    }
    

    constructor(props){
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNom = this.setNom.bind(this)
    }

    setTipo(e){
        this.setState({type: e.target.value })
    }

    setNom(e){
        this.setState({nom: e.target.value })
    }

    render(){
        const { type, nom} = this.state
        return (
            <div>
                <h1>{type} {nom}!</h1>
                <hr/>
                <input type="text" placeholder="Type..." 
                value={type} onChange={this.setTipo}/>

                <input type="text" placeholder="Nom..." 
                value={nom} onChange={this.setNom}/>
            </div>
        )
    }
}