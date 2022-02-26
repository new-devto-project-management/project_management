import React from 'react';
import "../../styles/components/authers/tools.css";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';


class Tool extends React.Component {
    constructor() {
        super(...arguments);
        this.toolbarSettings = {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
            ],
            type: 'Expand'
        };
    }
    render (){
        
        return (
            <main>
                <div className="tooblar" toolbarSettings={this.toolbarSettings}>
                   hello tools ..................;;
                </div>
            </main>
        )


    }
}

export default Tool
