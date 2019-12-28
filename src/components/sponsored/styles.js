import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;
    overflow: hidden;
    justify-content: center;
    align-content: center;
    align-items: center;

    &::before {
        background-image: url(${props => props.background});
        background-size: cover;
        background-position: center ;
        background-repeat: no-repeat;
        -webkit-filter: blur(35px);
        content: "";
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
        opacity: 0.3;
        height: 300px;
        overflow: hidden;
    }
`;