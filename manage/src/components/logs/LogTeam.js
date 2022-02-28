import React from 'react';
import ReactDom from 'react-dom';
import ClientForm from '../posts/ClientForm';
import Client from '../posts/Client';
import "../../styles/components/authers/logteam.css";



class LogTeam extends React.Component {
    // clientInput = React.createRef();

    state = {
        clients: [
            {id:1 , nom:"Lior Chamla"},
            {id:2 , nom:"traore cheick"},
            {id:3 , nom:" oumar tidiane"},
        ]
    };

  


    handelDelete = id => {
        const clients = [...this.state.clients];
        const index = clients.findIndex(client => client.id === id);

        clients.splice(index, 1);

        this.setState({ clients });
    };

        handelAdd = client => {
             // faire une copie
        const clients = [...this.state.clients];
        clients.push({client});

        // mise a jour de mon state
        this.setState({ clients });
        }
  

    render(){
        const dev = "Présentation de l'équipe de Développeurs."
      return(
            <div className='container'>
                  <div className='logContent'>
                        <li>{dev}</li>
                        <ul>
                            {
                                this.state.clients.map(client => (
                               
                                <Client details={client} onDelete={this.handelDelete}/>
                                
                                ))
                            }
                        </ul>
                        <ClientForm onClientAdd={this.handelAdd} />
                        
                  </div>
                
            </div>
        );
    }
};

export default LogTeam;