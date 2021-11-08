import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Utilisateurs',
    subtitle: "Enregistrement d'utilisateurs: Inclure, Lister, Modifier, Supprimer"
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {

    state = {...initialState}

    clear() {
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user 
        const method = user.id ? 'put' : 'post'  //Si != 0 on utilise put pour mette à jour l'utilisateur
                                                // Si == 0 on utilise post pour ajouter un utilisateur
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user).then(resp =>{
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list})
        })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id) //On recupere la liste d'utilisater sans l'utilisateur choisi
        list.unshift(user) //Ajoute l'utilisateur dans la premiere position
        return list
    }

    updateField(event){ //Methode pour mettre à jour le champs du form
        const user = {...this.state.user} //On clone l'utilisateur du state
        user[event.target.name] = event.target.value // On utiliste le nom de l'input pour chercher la propriété du 'state'
        this.setState({user}) 
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="name" 
                                    value={this.state.user.name}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Voulez saisir le nom..."></input>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" 
                                    className="form-control"
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Voulez saisir l'e-mail">
                            </input>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                                onClick={e => this.save(e)}>Enregistrer</button>
                        <button className="btn btn-secondary ml-2"
                                onClick={e => this.clear(e)}> Annuler</button>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}