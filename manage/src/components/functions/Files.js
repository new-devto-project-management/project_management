import React from 'react';
import "../../styles/components/authers/files.css";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import * as React from 'react';

class Files extends React.Component {
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
    render() {
        return (
        <>
            {/* <div className='toolbar'>
                <RichTextEditorComponent height={950} toolbarSettings={this.toolbarSettings}>
    
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
                </RichTextEditorComponent>
                
            </div> */}
        </>
  
  );
  
    }
}
export default Files;