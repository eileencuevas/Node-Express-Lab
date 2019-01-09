import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Post from './Post';


const ListContainer = styled.div`
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const LinkDiv = styled(Link)`
    text-decoration: none;
    color: black;
`

const PostsList = props => {
    return(
        <ListContainer>
            {props.posts.map(post => (
                <LinkDiv to={`/posts/${post.id}`}>
                    <Post 
                        key={post.id} 
                        data={post}
                        listView
                        />
                </LinkDiv>
            ))}
        </ListContainer>
    );
}

export default PostsList;