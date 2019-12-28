import React, { Component } from 'react';

import { 
    Container,
    ItemContainer,
    Item,
    SugestionTitle,
    ItemTitle,
    ItemDescription,
    ItemOverlay
} from './styles';

export default class Suggestion extends Component {
    render() {
        return (
            <Container className="col-12">
                <div className="col-12">
                    <SugestionTitle>{this.props.title}</SugestionTitle>
                    <div className="row">
                        <ItemContainer className="col-3">
                            <Item src="https://i.pinimg.com/originals/90/b6/5f/90b65f2f6e35721fb6c76209a17a88ca.jpg" />
                            <ItemTitle>XXIV Magic</ItemTitle>
                            <ItemDescription>Bruno Mars</ItemDescription>
                            <ItemOverlay>
                                <i className="material-icons">favorite_border</i>
                                <i className="material-icons">play_circle_filled</i>
                                <i className="material-icons">more_horiz</i>
                            </ItemOverlay>
                        </ItemContainer>
                        <ItemContainer className="col-3">
                            <Item artist src="https://yt3.ggpht.com/a/AGF-l7_mGsQjw1lWyx_1keNShTNnP6kWkPerGrThEg=s900-c-k-c0xffffffff-no-rj-mo" />
                            <ItemTitle artist>Bruno Mars</ItemTitle>
                            <ItemOverlay artist>
                                <i className="material-icons">favorite_border</i>
                                <i className="material-icons">play_circle_filled</i>
                                <i className="material-icons">more_horiz</i>
                            </ItemOverlay>
                        </ItemContainer>
                        <ItemContainer className="col-3">
                            <Item artist src="https://yt3.ggpht.com/a/AGF-l7_mGsQjw1lWyx_1keNShTNnP6kWkPerGrThEg=s900-c-k-c0xffffffff-no-rj-mo" />
                            <ItemTitle artist>Bruno Mars</ItemTitle>
                            <ItemOverlay artist>
                                <i className="material-icons">favorite_border</i>
                                <i className="material-icons">play_circle_filled</i>
                                <i className="material-icons">more_horiz</i>
                            </ItemOverlay>
                        </ItemContainer>
                        <ItemContainer className="col-3">
                            <Item src="https://i.pinimg.com/originals/90/b6/5f/90b65f2f6e35721fb6c76209a17a88ca.jpg" />
                            <ItemTitle>XXIV Magic</ItemTitle>
                            <ItemDescription>Bruno Mars</ItemDescription>
                            <ItemOverlay>
                                <i className="material-icons">favorite_border</i>
                                <i className="material-icons">play_circle_filled</i>
                                <i className="material-icons">more_horiz</i>
                            </ItemOverlay>
                        </ItemContainer>
                    </div>
                </div>
                
            </Container>
        );
    }
}
