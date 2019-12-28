import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars';

export const Container = styled.div`
    background: #121212;
    flex: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 9;
`;

export const MenuItem = styled.a`
    color: ${props => props.active ? '#fff' : 'rgba(255,255,255,0.6)'} !important;
    margin-top: 15px;
    font-size: 15px;
    font-weight: ${props => props.type == 'main' || props.type == "library" ? 'bold' : 'normal'};
    border-left: ${props => props.active ? '3px solid #1db954' : 'none'};
    padding-left: ${props => !props.active ? '12px' : '7px'};
    align-items:center;
    display: flex;

    &:hover{
        color: #fff !important;
        cursor: pointer;
    };

    i {
        vertical-align: middle;
        margin-right: 5px;
    }
`;

export const MenuHeader = styled.span`
    color: rgba(255,255,255,0.6) !important;
    font-size: 12px;
    display: block;
    margin-top: 20px;
    padding-left: 15px;
`
export const MainMenuContainer = styled.div`
    height: 120px;
`;

export const SecondaryMenuContainer = styled(Scrollbars)`
    flex: 1;
    overflow-y: auto;
    margin-top: 30px;
    padding-bottom: 15px;
`;

export const ButtonNewPlaylist = styled.a`
    color: rgba(255,255,255,0.6) !important;
    padding: 15px;
    border-top: 1px solid rgba(255,255,255,0.1);  
    text-align: center;
    height: 60px;
    justify-content:center;
    align-items:center;
    display: flex;

    &:hover {
        color: #fff !important;
        cursor: pointer;
    };

    i {
        margin-right: 5px;
        vertical-align: middle;
    };
`;  