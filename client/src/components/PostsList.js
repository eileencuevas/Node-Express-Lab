import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Post from './Post';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #4281A4;
`

class PostsList extends React.Component {
    constructor() {
        super();
        this.state = {
          posts: [],
        }
      }

    componentDidMount() {
        axios.get('http://localhost:5000/api/posts/')
          .then(response => {
            console.log(response.data);
            this.setState({ posts: response.data });
          })
          .catch(error => {
            console.log(error);
          })
      }

    render() {
        return(
            <ListContainer>
                {this.state.posts.map(post => (
                    <Post 
                        key={post.id} 
                        data={post}
                        listView
                    />
                ))}
            </ListContainer>
        );
        }
}

export default PostsList;