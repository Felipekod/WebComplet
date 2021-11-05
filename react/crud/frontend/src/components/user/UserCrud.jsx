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

    render() {
        return (
            <Main {...headerProps}>
                Utilisateur
            </Main>
        )
    }
}