import React, { Component } from 'react';

import {
    Container
} from './styles'

// COMPONENTES
import Menu from '../../components/menu'
import Activity from '../../components/activity'
import Player from '../../components/player'
import Header from '../../components/header'
import Sponsored from '../../components/sponsored'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row" style={{ height: 'calc(100% - 100px)' }}>
                    <Menu />
                    <Container className="col-8 no-padding">
                        
                        <Header />

                        <Sponsored />

                    </Container>
                    <Activity />
                </div>
                <div className="row"  style={{ height: '100px' }}>
                    <Player />
                </div>
            </div>
        );
    }
}
