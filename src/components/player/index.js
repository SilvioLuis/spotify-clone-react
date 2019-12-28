import React, { Component } from 'react';

import { 
    Container 
} from './styles';

import './styles.css'

export default class Player extends Component {

    state = {
        musicUrl: 'https://spotify-clone-react.s3.amazonaws.com/musics/bar-blues.mp3',
        playing: false,
        played: 0
    }

    audio = new Audio(this.state.musicUrl);
    watchProgress = null;

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ playing: false }));
    }
    
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ playing: false }));  
    }

    _togglePlaying = () => {
        this.setState({ playing: !this.state.playing }, () => {
            if (this.state.playing) {
                this.loop();
                this.audio.play()
            } else {
                this.audio.pause();
                clearTimeout(this.watchProgress);
            }
        });
    }

    loop = () => {
        var buffered = this.audio.buffered;
        var played;
      
        if (buffered.length) {
            played = 100 * this.audio.currentTime / this.audio.duration;
            this.setState({ played: played.toFixed(2) });
        }

        this.watchProgress = setTimeout(this.loop, 50);
    }

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
                        <i className="material-icons" onClick={this._togglePlaying}>{this.state.playing ? 'pause' : 'play'}_circle_outline</i> 
                        <i className="material-icons">skip_next</i> 
                        <i className="material-icons">repeat</i> 
                    </div>

                    <div class="progress">

                        <div 
                            class="progress-bar" 
                            role="progressbar" 
                            style={{ 
                                width: `${this.state.played}%`
                             }} 
                            aria-valuenow={`${this.state.played}%`} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                            <span 
                                style={{
                                    left: `${this.state.played}%`
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
