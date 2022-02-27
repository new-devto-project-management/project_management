import React from 'react';
import ReactDom from 'react-dom';
import "../../styles/components/authers/logteam.css";



class LogTeam extends React.Component {
    clientInput = React.createRef();

    state = {
        clients: [
            {id:1 , nom:"Lior Chamla"},
            {id:2 , nom:"traore cheick"},
            {id:3 , nom:" oumar tidiane"},
        ],
        nouveauClient : ''
    };

    handelClick = () => {
        console.log(this.state);
    };



    handelDelete = id => {
        const clients = this.state.clients.slice();
        const index = clients.findIndex((client) => {
            return client.id === id
        });

        clients.splice(index, 1);

        this.setState({clients : clients});
    };

    hundelSubmit  = (event) => {
        event.preventDefault();
        console.log("ca marche du tonere ...");
    };
    handelChange = (event) => {
        console.log(event.currentTarget.value);
    };
    render(){
        const dev = "Présentation de l'équipe de Développeurs."
      return(
            <div className='container'>
                  <div className='logContent'>
                        <li>{dev}</li>
                        <ul>
                        <button onClick={this.handelClick}>Ajouter un nouveau membre !</button>
                            {
                                this.state.clients.map(client => (
                                <li>{client.nom}{""}
                                <button onClick={() => this.handelDelete(client.id)}>Enlevé un membre !</button>
                                </li> 
                                
                                ))
                            }
                        </ul>
                        <form onSubmit={this.handelSubmit}>
                            <input value={this.state.nouveauClient} ref={this.clientInput} onChange={this.handelChange} type="text" placeholder='Ajouter un client ...' />
                            <button>Confirmer</button>
                        </form>
                        
                  </div>
                
            </div>
        );
    }
};

export default LogTeam;