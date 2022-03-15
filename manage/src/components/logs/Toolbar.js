import React, { Component } from 'react';
export default class Toolbar extends Component {
    handleZoomChange = (e) => {
        if (this.props.onZoomChange) {
            this.props.onZoomChange(e.target.value)
        }
    }
    render() {
        const zoomRadios = [{label:'Heures',value:'Hours'},{label:'Jours',value:'Days'},{label:'Mois',value:'Months'}].map((obj) => {
            const isActive = this.props.zoom === obj.value;
            return (
                <label key={ obj.value } className={ `radio-label ${isActive ? 'radio-label-active': ''}` }>
                    <input type='radio'
                        checked={ isActive }
                        onChange={ this.handleZoomChange }
                        value={ obj.value }/>
                    { obj.label }
                </label>
            );
        });

        return (
            <div className="tool-bar">
                <b>Planification : </b>
                    { zoomRadios }
            </div>
        );
    }
}
