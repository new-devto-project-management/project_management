import React, { Component } from 'react';
import qs from 'qs';
// import qs from 'querystring';

import api from '../crud/service/api';

import UserTable from '../crud/table/UserTable';
import AddUserForm from '../crud/forms/AddUserForm';
import EditUserForm from '../crud/forms/EditUserForm';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            currentUser: { id: null, name: '', username: '' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshUserTable();
    }

    refreshUserTable() {
        this.usersData = api.get('api')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    users: data.data,
                    setUsers: data.data
                });
            });
    }

    addUser = user => {

        api.post('api', qs.stringify(user))
            .then(res => {
                this.refreshUserTable();
            });
    };

    deleteUser = id => {

        api.delete(`api/${id}`)
            .then(res => {
                this.refreshUserTable();
            });
    };

    updateUser = (id, user) => {
        
        api.put(`api/${id}`, qs.stringify(user))
            .then(res => {

                this.refreshUserTable();
            });
        
        this.setState({ 
            currentUser: { id: null, name: '', username: '' }
        });

        this.setEditing(false);
    };

    editRow = user => {

        this.setState({ 
            currentUser: { id: user.id, name: user.name, username: user.username }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { users } = this.state;

        return (
            <div className="container">
                    
                <div className="row">
    
                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                <h4>Editer l'utilisateur</h4>
                                <EditUserForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentUser={this.state.currentUser}
                                    updateUser={this.updateUser} 
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                <h4>Ajouter une Utilisateur</h4>
                                <AddUserForm addUser={this.addUser} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l6">
                        <h5>Utilisateur</h5>
                        <UserTable users={users} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;