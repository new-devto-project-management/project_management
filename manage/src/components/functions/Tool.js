import React from 'react';
import "../../styles/components/authers/tools.css";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';


class Tool extends React.Component {
        render (){
        
        return (
            <main>
                <div className="toolbar" toolbarSettings={this.toolbarSettings}>
                   he hello hello tools...
                   
                </div>
            </main>
        )


    }
}

export default Tool;
