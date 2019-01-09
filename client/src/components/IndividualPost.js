import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Post from './Post';

const SoleContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LinkDiv = styled(Link)`
    text-decoration: none;
    color: #EAD2AC;
`

const Loading = styled.p`
    color: #EAD2AC;
`

const IndividualPost = props => {
    const postId = props.match.params.postId;
    const currentPost = props.posts.filter(post => post.id == postId)

    if (currentPost && props.posts.length > 0) {
        return(
            <SoleContainer>
                <Post data={currentPost[0]} />
                <LinkDiv to='/'><p>Return Home</p></LinkDiv>
            </SoleContainer>
        );
    } else {
        return(
            <SoleContainer>
                <Loading>No Post Found!</Loading>
            </SoleContainer>
        );
    }
}

export default IndividualPost;