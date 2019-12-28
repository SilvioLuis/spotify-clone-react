import styled from 'styled-components';

export const Container = styled.div`
    height: 300px;
`;

export const ItemContainer = styled.div`
    height: 200px;
    text-align: center;
`;

export const ItemOverlay = styled.div`
    top: 0;
    position: absolute;
    display: flex;
    flex: 1;
    border-radius: ${props => props.artist ? "200px" : 0};
    height: 170px;
    width: 86%;
    background: rgba(0,0,0,0.6);
    opacity: 0;
    justify-content: center;
    align-content: center;
    align-items: center;

    &:hover {
        opacity: 1;
    };

    i {
        color: rgba(255,255,255,0.6);
        font-size: 20px;
        margin-left: 20px;
        cursor: pointer;
    }

    i:nth-child(2) {
        color: #fff;
        font-size: 50px;

        &:hover {
            zoom: 1.1;
        }
    };

    i:first-child {
        margin-left: 0;
    }
`;

export const Item = styled.img`
    border-radius: ${props => props.artist ? "200px" : 0};
    width: 100%;
    height: 170px;
`;

export const SugestionTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    margin-bottom: 30px;
    margin-top: 30px;
`;

export const ItemTitle = styled.span`
    color: #fff;
    display: block;
    margin-top: 10px;
    font-weight: 450;
    font-size: 13px;
    text-align: ${props => props.artist ? 'center' : 'left'};
`;

export const ItemDescription = styled.span`
    color: rgba(255,255,255,0.6);
    display: block;
    font-size: 13px;
    text-align: ${props => props.artist ? 'center' : 'left'};
`;