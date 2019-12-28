import React, { Component } from 'react';

import { 
    Container
} from './styles';

import './styles.css'

import { Scrollbars } from 'react-custom-scrollbars';

export default class Activity extends Component {

    renderThumb = ({ style, ...props }) => (
        <div style={{ ...style, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 10 }} {...props}/>
    );
    
    render() {
        return (
            <Container className="col-2">
            
                {/* MANEIRA INLINE DE COLOCAR CSS, NÃO RECOMENDADA */}
                <h6
                    style={{
                        color: "#fff",
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(255,255,255,0.3)",
                        borderBottomStyle: "solid",
                        paddingBottom: 10,
                        padding: 15
                    }}
                >Atividade de amigos</h6>

                {/* MANEIRA CONVENCIONAL DE COLOCAR CSS, NÃO RECOMENDADA */}
                <Scrollbars 
                    //renderThumbHorizontal={this.renderThumb}
                    renderThumbVertical={this.renderThumb}
                    id="friendList"
                >
                    {[1, 2, 3].map(i => (
                        <li key={i} className="row">
                            <div className="col-3 align-self-center">
                                <img 
                                    className="img-fluid rounded-circle"
                                    src="https://media.licdn.com/dms/image/C4D03AQHu2-5vla8zNQ/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=psaEJRBqv8ziltZJNfMqiRshx6PiNiTvd7yU9E2U3y4" 
                                />
                            </div>

                            <div className="col-8 no-padding">
                                <div className="col-12" style={{ paddingRight: 0 }}>
                                    <b>Silvio Luis</b>
                                    <small>10 h</small>
                                </div>
                                <br />
                                <div className="col-12">
                                    <a href="javascript:void(0)">Nome da Música</a>
                                    <a href="javascript:void(0)">Nome do Artista</a>
                                    <a href="javascript:void(0)"><i className="material-icons">music_note</i>  Nome do Album</a>
                                </div>
                            </div>
                        </li>
                    ))}

                    <br />
                    <div className="col-12">
                        <button className="btn btn-block btn-sm btn-outline-light">ENCONTRAR AMIGOS</button>
                    </div>
                    <br />
                </Scrollbars>
            </Container>
        );
    }
}
