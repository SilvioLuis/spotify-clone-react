import React, { Component } from 'react';

import { 
    Container 
} from './styles';

import './styles.css'

export default class Player extends Component {
    render() {
        return (
            <Container className="container-fluid">
                <div className="col-3 music-infos">
                    <img 
                        className="img-fluid album-thumb rounded" 
                        src="https://i.scdn.co/image/ab67706f00000002ce495a3fb2e01db25f755da0" 
                    />
                    <div>
                        <span>16 Bars Blues</span>
                        <small>The Piano Bar</small>
                    </div>
                </div>
                <div className="col-6">

                    <div className="controls-container">
                        <i className="material-icons">shuffle</i>
                        <i className="material-icons">skip_previous</i> 
                        <i className="material-icons">play_circle_outline</i> 
                        <i className="material-icons">skip_next</i> 
                        <i className="material-icons">repeat</i> 
                    </div>

                    <div class="progress">

                        <div 
                            class="progress-bar" 
                            role="progressbar" 
                            style={{ 
                                width: '25%'
                             }} 
                            aria-valuenow="25" 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                            <span 
                                style={{
                                    left: '25%'
                                }}
                                id="playerBullet"
                            ></span>
                        </div>

                    </div>

                </div>
                <div className="col-3">
                    <div className="right-controls">
                        <i className="material-icons">playlist_play</i>
                        <i className="material-icons">devices_other</i>
                        <i className="material-icons">volume_up</i>
                    </div>
                </div>
            </Container>
        );
    }
}
