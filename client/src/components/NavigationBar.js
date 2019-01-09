import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PlusSquare } from 'styled-icons/fa-regular';

const NavDiv = styled.div`
    width: 100%;
    height: 70px;
    margin: 0 auto;
    background-color: #031926;
    position: fixed;
    z-index: 1;
`

const NavContainer = styled.div`
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    h1 {
        color: #E6B89C;
        font-family: 'Inconsolata', monospace;
    }
`

const LinkDiv = styled(Link)`
    text-decoration: none;
`

const AddPostButton = styled(PlusSquare)`
    width: 50px;
    height: 50px;
    margin: 10px 0;
    color: #E6B89C;
`

const NavigationBar = () => {
    return(
        <NavDiv>
            <NavContainer>
                <LinkDiv exact to='/'>
                    <h1>Quotes</h1>
                </LinkDiv>
                <LinkDiv to='/add'>
                    <AddPostButton />
                </LinkDiv>
            </NavContainer>
        </NavDiv>
    );
}

export default NavigationBar;