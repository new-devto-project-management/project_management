import React from 'react';
import "../../styles/components/authers/files.css";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import * as React from 'react';

const Files = () => {
    constructor(props) (
        super(props);
        this.state = { editorHtml: '', theme: 'snow' };
        this.handleChange = this.handleChange.bind(this);
    )
    
      handleChange(html) {
        this.setState({ editorHtml: html });
      }
    
      handleThemeChange(newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme });
      }
    
      render(){
          return(
            React.createElement("div", null, /*#__PURE__*/
            React.createElement(ReactQuill, {
              theme: this.state.theme,
              onChange: this.handleChange,
              value: this.state.editorHtml,
              modules: Editor.modules,
              formats: Editor.formats,
              bounds: '.app',
              placeholder: this.props.placeholder }), /*#__PURE__*/
      
            React.createElement("div", { className: "themeSwitcher" }, /*#__PURE__*/
            React.createElement("label", null, "Theme "), /*#__PURE__*/
            React.createElement("select", { onChange: (e) =>
              this.handleThemeChange(e.target.value) }, /*#__PURE__*/
            React.createElement("option", { value: "snow" }, "Snow"), /*#__PURE__*/
            React.createElement("option", { value: "bubble" }, "Bubble"), /*#__PURE__*/
            React.createElement("option", { value: "core" }, "Core")))
            )
            );
            * Quill modules to attach to editor
            * See https://quilljs.com/docs/modules/ for complete options
            */
           Editor.modules = {
             toolbar: [
             [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
             [{ size: [] }],
             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
             [{ 'list': 'ordered' }, { 'list': 'bullet' },
             { 'indent': '-1' }, { 'indent': '+1' }],
             ['link', 'image', 'video'],
             ['clean']],
           
             clipboard: {
               // toggle to add extra line breaks when pasting HTML:
               matchVisual: false } };
           
           
           /* 
            * Quill editor formats
            * See https://quilljs.com/docs/formats/
            */
           Editor.formats = [
           'header', 'font', 'size',
           'bold', 'italic', 'underline', 'strike', 'blockquote',
           'list', 'bullet', 'indent',
           'link', 'image', 'video'];
           
           
           /* 
            * PropType validation
            */
           Editor.propTypes = {
             placeholder: PropTypes.string };
           
           
          


      }
};
export default Files;