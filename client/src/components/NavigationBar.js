import React from 'react';
import styled from 'styled-components';

const NavDiv = styled.div`
    padding: 1px;
    width: 100%;
    text-align: center;
    background-color: #031926;

    h1 {
        color: #E6B89C;
        font-family: 'Inconsolata', monospace;
    }
`

const NavigationBar = () => {
    return(
        <NavDiv>
            <h1>Quotes</h1>
        </NavDiv>
    );
}

export default NavigationBar;