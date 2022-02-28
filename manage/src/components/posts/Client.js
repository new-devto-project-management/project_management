import React, { Component } from 'react';
import { render } from 'react-dom';

class Client extends Component {

    render(){
        const { details , onDelete } = this.props;

        return (
            
                <li>
                    {details.nom}{" "}
                    <button onClick={() => onDelete(details.id)}>Supprimer</button>
                </li>
            
        );
    }
};

  export default Client;