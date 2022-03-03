import React from 'react';
import { Link } from 'react-router-dom';
import { HtmlEditor, Image, Inject, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import "../../styles/components/functions/tools.css";


class Tool extends React.Component {
        render (){
        
        return (
            <main>
                <div className="toolbar" >
                   he hello hello tools...
                   <div className="menu-icon">
                      <li className="new-project">
                        <Link to="/" className="create-new-project">
                          <i className={ 'fas fa-plus'}/>                     

                        </Link>
                      </li>
                    </div>
                   
                </div>
            </main>
        )


    }
}

export default Tool;
