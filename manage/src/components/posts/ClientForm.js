import React, { Component } from 'react';

class ClientForm extends Component {
    state = {
        nouveauClient :''
    };
    handelSubmit  = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const nom = this.state.nouveauClient;

        this.props.onClientAdd({id , nom});

        this.setState({ nouveauClient: "" })
       
    };

    handelChange = (event) => {
        
        this.setState({ nouveauClient: event.currentTarget.value }); 
        // console.log(event.currentTarget.value);
    };
    render(){
        return (
            
            <form onSubmit={this.handelSubmit}>
                <input value={this.state.nouveauClient}
                    onChange={this.handelChange}
                    type="text" placeholder='Ajouter un deveoppeur'
                />
                <button>Confirmer</button>
                
            </form>
        );
    }
};

export default ClientForm;