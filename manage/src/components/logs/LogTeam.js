import React from 'react';
import ReactDom from 'react-dom';
// import ReactTooltip from 'react-tooltip';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tooltip, Button } from "@blueprintjs/core";
import ClientForm from '../posts/ClientForm';
import Client from '../posts/Client';
import "../../styles/components/logs/_logTeam.css";



class LogTeam extends React.Component {
    // clientInput = React.createRef();

    state = {
        clients: [
            {id:'1' , nom:""},
            {id:2 , nom:"traore cheick"},
            
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
        // const dev = "Présentation de l'équipe de Développeurs."
      return(
            <div className='containers'>
                  <div className='logContent'>
                        <div className="presentation">
                            <div className='prensetationContent'>
                                <h1>RESPONSABLES DU PROJET</h1>
                                <span>Client && Managers</span>
                                 {/* inscription */}
                               <form>
                                 <div className='Mou'>
                                {/* propriétaire */}
                                <Tooltip content="Personne physique ou morale qui sera propriétaire de l'ouvrage réalisé." position='right'>
                                    <input aria-label="Personne physique ou morale qui sera propriétaire de l'ouvrage réalisé." placeholder='non du Client...' required aria-required="true"/>
                                </Tooltip>  
                                    <label>Maître d'ouvrage</label>  
                                {/* <Tooltip content="" position='right'>
                                            
                                    </Tooltip>                     */}
                                </div>
                                   
                                 <div className='Moe'>                                    
                                    {/* personne responnsable */}
                                    <Tooltip content="Personne physique ou morale qui réalise le travail pour le maître d'ouvrage." position='right'>
                                        <input aria-label="Personne physique ou morale qui réalise le travail pour le maître d'ouvrage. " placeholder="Responsable du project..." required aria-required="true"/>
                                    </Tooltip>  
                                    <label>Maître d'œuvre</label>
                                </div>

                                 <div className="Ca">
                                {/* charger d'affaire */}
                                <Tooltip content="Le
                                    chargé d'affaires assure les contacts avec le maître d'ouvrage avant la conclusion du
                                    contrat, pendant son déroulement et lors de son achèvement." position='right'>
                                            
                                    <input aria-label="Le
                                    chargé d'affaires assure les contacts avec le maître d'ouvrage avant la conclusion du
                                    contrat, pendant son déroulement et lors de son achèvement." placeholder="chargé d'affaire..." required aria-required="true"/>
                                </Tooltip>
                                <label>Le chargé d'affaire d'affaire / Porfolio manager</label>
                                </div>
                                 <div className='flex'>  
                                {/*  */}
                                <Tooltip content="Valider le formulaire" position='right'>                                            
                                    <button className='fancy'>Confirmer</button>
                                </Tooltip>
                                </div>
                               </form>
                            </div>
                        </div>
                        <div className="formulaire">
                             <div className='devops'>
                                <h1>PRESENTATON DE L'EQUIPE </h1>
                                <span>DE DEVELOPPEURS</span>

                                {/* <ul>
                                    {
                                        this.state.clients.map(client => (
                                    
                                        <Client details={client} onDelete={this.handelDelete}/>
                                        
                                        ))
                                    }
                                </ul> */}
                                <form>
                                    
                                    <div className='chefDequipe'>                                    
                                        {/* chefs d'"quipe" */}
                                        <Tooltip content="personne physique chargée dans le cadre d'une mission définie,
                                                d'assumer la maîtrise du projet, c'est-à-dire de veiller à sa bonne réalisation dans les
                                                objectifs de technique, de coût et de délai." position='right'>
                                            
                                            <input aria-label="personne physique chargée dans le cadre d'une mission définie,
                                                d'assumer la maîtrise du projet, c'est-à-dire de veiller à sa bonne réalisation dans les
                                                objectifs de technique, de coût et de délai." placeholder="chef de Projet..." required aria-required="true"/>
                                        </Tooltip>
                                        <label>Chef de projet / Project Manager</label>
                                    </div>
                                    
                                    <div className='resPlan'>                                    
                                        {/* personne responnsable de la planification */}
                                        <Tooltip content="Il identifie et organise les tâches, publie l'échéancier de chaque activité; ensuite, il met
                                            à jour le planning et calcule la probabilité que les délais soient maintenus. Souvent, le
                                            chef de projet assume cette fonction." position='right'>
                                            
                                            <input aria-label="Il identifie et organise les tâches, publie l'échéancier de chaque activité; ensuite, il met
                                            à jour le planning et calcule la probabilité que les délais soient maintenus. Souvent, le
                                            chef de projet assume cette fonction. " placeholder="Responsable Planification..." required aria-required="true"/>
                                        </Tooltip>
                                        <label>Responsable planification / Scope & Time Manager</label>
                                    </div>
                                    

                                    <div className='resDepart'> 
                                        {/* personne responnsable de departement */}
                                        <Tooltip content="le garant d'un des savoir-faire de l'entreprise. Il est sollicité par la chef de projet à
                                            qui il doit fournir les moyens en rapport avec son métier. " position='right'>
                                            
                                            <input aria-label="le garant d'un des savoir-faire de l'entreprise. Il est sollicité par la chef de projet à
                                            qui il doit fournir les moyens en rapport avec son métier. "  placeholder="Responsable de département..." required aria-required="true"/>
                                        </Tooltip> 
                                        <label>Responsable de département / Team leader & HR Manager</label>
                                    </div>

                                    <div className='resQual'>                                
                                        {/* personne responnsable de la qualité*/}
                                        <input aria-label="Personne physique ou morale de la démarche qualité dont l'importance va en augmentant (Risk Management) " placeholder="Responsable Qualité (QM)..." required aria-required="true"/>
                                        <label>Directeur Qualité / Quality Manager</label>
                                        
                                    </div>
                                    <div className='resCont'>
                                        
                                        {/* personne responnsable du contrôle de gestion*/}
                                        <Tooltip content="Le coût est l'un des trois piliers de la gestion de projet (Qualité – Coûts – Délais), d'où
                                            l'importance de ce rôle. Les outils mathématiques sont aussi à ce niveau
                                            indispensables. " position='right'>
                                            
                                            <input aria-label="Le coût est l'un des trois piliers de la gestion de projet (Qualité – Coûts – Délais), d'où
                                            l'importance de ce rôle. Les outils mathématiques sont aussi à ce niveau
                                            indispensables. " placeholder=" Contrôleur de gestion  (Coût)..." required aria-required="true"/>
                                        </Tooltip> 
                                        <label>Contrôleur de Gestion / Cost Manager</label>
                                    </div>

                                    <div className='nbrDev'>
                                    {/* nombr de dev */}
                                        <Tooltip content="nombre de developpeurs sur le projet" position='right'>                                            
                                        <input aria-label='nombre de developpeurs' placeholder='total de developpeur...' required aria-required="true"/>
                                        </Tooltip> 
                                        <label>nombre de developpeur sur le projet</label>
                                    </div>

                                    {/*  */}
                                    <Tooltip content="Valider le formulaire" position='right'>
                                            
                                        <button className='fancy'>Confirmer</button>
                                    </Tooltip> 
                                </form>
                            </div>
                            {/* <ClientForm onClientAdd={this.handelAdd} /> */}
                        </div>

                        
                  </div>

                  
                
            </div>
        );
    }
};

export default LogTeam;