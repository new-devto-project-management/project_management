import React from 'react';
import ReactDom from 'react-dom';
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
            <div className='container'>
                  <div className='logContent'>
                        <div className="presentation">
                            <div className='prensetationContent'>
                                <h1>PRESENTATON DE L'EQUIPE </h1>
                                <span>DE DEVELOPPEURS</span>
                                 {/* inscription */}
                               <form>
                                 <div className='Mou'>
                                {/* propriétaire */}
                                <input aria-label="Personne physique ou morale qui sera propriétaire de l'ouvrage réalisé." placeholder='non du Client...' required aria-required="true"/>
                                <label>Maître d'ouvrage</label>                        
                                </div>

                                 <div className='Moe'>                                    
                                    {/* personne responnsable */}
                                    <input aria-label="Personne physique ou morale qui réalise le travail pour le maître d'ouvrage. " placeholder="Responsable du project..." required aria-required="true"/>
                                    <label>Maître d'œuvre</label>
                                </div>

                                 <div className="Ca">
                                {/* charger d'affaire */}
                                <input aria-label="Le
                                chargé d'affaires assure les contacts avec le maître d'ouvrage avant la conclusion du
                                contrat, pendant son déroulement et lors de son achèvement." placeholder="chargé d'affaire..." required aria-required="true"/>
                                <label>Le chargé d'affaire d'affaire / Porfolio manager</label>
                                </div>
                                 <div className='flex'>  
                                {/*  */}
                                <button className='fancy'>Confirmer</button>
                                </div>
                               </form>
                            </div>
                        </div>
                        <div className="formulaire">
                            <ul>
                                {
                                    this.state.clients.map(client => (
                                
                                    <Client details={client} onDelete={this.handelDelete}/>
                                    
                                    ))
                                }
                            </ul>
                            <form>
                                 
                                <div className='chefDequipe'>                                    
                                    {/* chefs d'"quipe" */}
                                    <input aria-label="personne physique chargée dans le cadre d'une mission définie,
                                        d'assumer la maîtrise du projet, c'est-à-dire de veiller à sa bonne réalisation dans les
                                        objectifs de technique, de coût et de délai." placeholder="chef de Projet..." required aria-required="true"/>
                                    <label>Chef de projet / Project Manager</label>
                                </div>
                                
                                 <div className='resPlan'>                                    
                                    {/* personne responnsable de la planification */}
                                    <input aria-label="Il identifie et organise les tâches, publie l'échéancier de chaque activité; ensuite, il met
                                    à jour le planning et calcule la probabilité que les délais soient maintenus. Souvent, le
                                    chef de projet assume cette fonction. " placeholder="Responsable Planification..." required aria-required="true"/>
                                    <label>Responsable planification / Scope & Time Manager</label>
                                </div>
                                

                                 <div className='resDepart'> 
                                    {/* personne responnsable de departement */}
                                    <input aria-label="le garant d'un des savoir-faire de l'entreprise. Il est sollicité par la chef de projet à
                                    qui il doit fournir les moyens en rapport avec son métier. "  placeholder="Responsable de département..." required aria-required="true"/>
                                    <label>Responsable de département / Team leader & HR Manager</label>
                                </div>

                                 <div className='resQual'>                                
                                    {/* personne responnsable de la qualité*/}
                                    <input aria-label="Personne physique ou morale de la démarche qualité dont l'importance va en augmentant (Risk Management) " placeholder="Responsable Qualité (QM)..." required aria-required="true"/>
                                    <label>Directeur Qualité / Quality Manager</label>
                                    
                                </div>
                                <div className='resCont'>
                                    
                                    {/* personne responnsable du contrôle de gestion*/}
                                    <input aria-label="Le coût est l'un des trois piliers de la gestion de projet (Qualité – Coûts – Délais), d'où
                                    l'importance de ce rôle. Les outils mathématiques sont aussi à ce niveau
                                    indispensables. " placeholder=" Contrôleur de gestion  (Coût)..." required aria-required="true"/>
                                    <label>Contrôleur de Gestion / Cost Manager</label>
                                </div>

                                <div className='nbrDev'>
                                {/* nombr de dev */}
                                    <input aria-label='nombre de developpeurs' placeholder='total de developpeur...' required aria-required="true"/>
                                    <label>nombre de developpeur sur le projet</label>
                                </div>

                                {/*  */}
                                <button className='fancy'>Confirmer</button>
                            </form>
                            <ClientForm onClientAdd={this.handelAdd} />
                        </div>
                        
                  </div>
                
            </div>
        );
    }
};

export default LogTeam;