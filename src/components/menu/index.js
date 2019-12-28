import React, { Component } from 'react';

import { 
    Container,
    MenuItem,
    MenuHeader,
    MainMenuContainer,
    SecondaryMenuContainer,
    ButtonNewPlaylist
} from './styles';

export default class Menu extends Component {

    renderThumb = ({ style, ...props }) => (
        <div style={{ ...style, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 10 }} {...props}/>
    );
    
    render() {
        return (
            <Container className="col-2">
                <MainMenuContainer>
                    <MenuItem active type="main">
                        <i className="material-icons">home</i> 
                        <text>Inicio</text>
                    </MenuItem>
                    <MenuItem type="main">
                        <i className="material-icons">album</i> 
                        <text>Navegar</text>
                    </MenuItem>
                    <MenuItem type="main">
                        <i className="material-icons">wifi_tethering</i> 
                        <text>Rádio</text>
                    </MenuItem>
                </MainMenuContainer>

                <SecondaryMenuContainer
                    renderThumbHorizontal={this.renderThumb}
                    renderThumbVertical={this.renderThumb}
                >
                    <MenuHeader>SUA BIBLIOTECA</MenuHeader>
                    <MenuItem type="library">Feito para você</MenuItem>
                    <MenuItem type="library">Tocados Recentementes</MenuItem>
                    <MenuItem type="library">Músicas Curtidas</MenuItem>
                    <MenuItem type="library">Álbuns</MenuItem>
                    <MenuItem type="library">Artistas</MenuItem>
                    <MenuItem type="library">Podcasts</MenuItem>

                    <br /> 
                    <MenuHeader>PLAYLISTS</MenuHeader>
                    <MenuItem>As Mais Tocadas</MenuItem>
                    <MenuItem>Jazz Piano</MenuItem>
                    <MenuItem>Sunday Bests</MenuItem>
                    <MenuItem>As Mais Tocadas</MenuItem>
                    <MenuItem>Jazz Piano</MenuItem>
                    <MenuItem>Sunday Bests</MenuItem>
                    <MenuItem>As Mais Tocadas</MenuItem>
                    <MenuItem>Jazz Piano</MenuItem>
                    <MenuItem>Sunday Bests</MenuItem>
                    <MenuItem>As Mais Tocadas</MenuItem>
                    <MenuItem>Jazz Piano</MenuItem>
                    <MenuItem>Sunday Bests</MenuItem>
                </SecondaryMenuContainer>
                
                <ButtonNewPlaylist>
                    <i className="material-icons">add_circle_outline</i> 
                    <text>Nova Playlist</text>
                </ButtonNewPlaylist>

            </Container>
        );
    }
}
