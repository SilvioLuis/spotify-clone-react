import React, { Component } from 'react';

import { 
    Container 
} from './styles';

import './styles.css';

export default class Sponsored extends Component {
    render() {
        return (
            <Container
                background="https://i.scdn.co/image/a58bd3fcdae7ab90b95b02e161e3f51fcb3d7e86"
            >
                <img 
                    className="cover-sponsored"
                    src="https://i.scdn.co/image/a58bd3fcdae7ab90b95b02e161e3f51fcb3d7e86" 
                />

                <div className="sponsored-content">
                    <small>ALBUM</small>
                    <h4>Wyclef Jean</h4>

                    <b>Artista Teste</b>
                    <p>Uma breve descrição desse album, escrita somente para ocupar o espaço desse texto.</p>
                
                    <button className="btn btn-sm btn-success btn-sponsored">Escutar</button>
                    <button className="btn btn-sm btn-outline-light btn-sponsored">Salvar</button>
                </div>
            </Container>
        );
    }
}
