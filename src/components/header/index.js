import React, { Component } from 'react';
import './styles.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="first-controls">
                    <i className="material-icons">keyboard_arrow_left</i>
                    <i className="material-icons">keyboard_arrow_right</i>
                    <input type="text" className="form-control" placeholder="Buscar..." />
                </div>
                <div className="last-controls">
                    <button class="btn btn-sm btn-outline-light">FAZER UPGRADE</button>
                </div>
            </header>
        )
    }
}
