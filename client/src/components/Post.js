import React from 'react';
import styled from 'styled-components';
import { QuotesLeft, QuotesRight } from 'styled-icons/icomoon';

const IndividualPost = styled.div`
    height: 300px;
    width: 450px;
    padding: 10px;
    border: 1px solid #EAD2AC;
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #BFD5E2;
        font-family: 'Inconsolata', monospace;
    }

    p {
        color: #EAD2AC;
        font-family: 'Thasadith', sans-serif;
        transform: translate(85%, 0);
    }
`
const LeftQuote = styled(QuotesLeft)`
    width: 100px;
    position: absolute;
    top: 0;
    left: 10px;
    color: #7EA6B7;
    opacity: 0.3;
`

const RightQuote = styled(QuotesRight)`
    width: 100px;
    position: absolute;
    right: 10px;
    bottom: 0;
    color: #7EA6B7;
    opacity: 0.3;
`

const Loading = styled.p`
    color: #EAD2AC;
`

const Post = props => {
    if (props.data){
        return(
            <IndividualPost>
                <h2>{props.data.title}</h2>
                <p>— {props.data.contents} ;)</p>
                <LeftQuote />
                <RightQuote />
            </IndividualPost>
        );
    } else {
        return(
                <Loading>No Post Found!</Loading>
        );
    }
}

export default Post;