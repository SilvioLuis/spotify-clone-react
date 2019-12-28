import React, { Component } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import {
    Container
} from './styles'

// COMPONENTES
import Menu from '../../components/menu'
import Activity from '../../components/activity'
import Player from '../../components/player'
import Header from '../../components/header'
import Sponsored from '../../components/sponsored'
import Suggestion from '../../components/suggestion'

export default class Home extends Component {

    renderThumb = ({ style, ...props }) => (
        <div style={{ ...style, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 10 }} {...props}/>
    );

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row" style={{ height: 'calc(100% - 100px)' }}>
                    <Menu />

                    <div className="col-8 no-padding">
                        <Header />
                        <Scrollbars 
                            renderThumbHorizontal={this.renderThumb}
                            renderThumbVertical={this.renderThumb}
                            style={{
                                display: 'flex',
                                flex: 1,
                                height: 'calc(100% - 50px)',
                                backgroundColor: "#000"
                            }}
                        >
                            <Sponsored />
                            <Suggestion title="Tocadas Recentemente" />
                            <Suggestion title="Feitas para você" />
                            <Suggestion title="Adicionadas Recentemente" />
                        </Scrollbars>
                    </div>
                    <Activity />
                </div>
                <div className="row"  style={{ height: '100px' }}>
                    <Player />
                </div>
            </div>
        );
    }
}
