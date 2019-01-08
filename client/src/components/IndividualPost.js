import React from 'react';
import axios from 'axios';
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
    background-color: #4281A4;
`

const LinkDiv = styled(Link)`
    text-decoration: none;
    color: #EAD2AC;
`

const Loading = styled.p`
    color: #EAD2AC;
`

class IndividualPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    fetchPost = postId => {
        axios
            .get(`http://localhost:5000/api/posts/${postId}`)
            .then(response => {
                console.log(response.data);
                this.setState({ post : response.data[0]})
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        this.fetchPost(postId);
    }

    render() {
        if (!this.state.post) {
            return(
                <SoleContainer>
                    <Loading>No Post Found!</Loading>
                </SoleContainer>
            );
        }

        return(
            <SoleContainer>
                <Post data={this.state.post} />
                <LinkDiv to='/'><p>Return Home</p></LinkDiv>
            </SoleContainer>
        );
    }

}

export default IndividualPost;