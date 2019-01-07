import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Post from './Post';

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
            return <p className='loading'>No Post Found!</p>
        }

        return(
            <>
                <Post data={this.state.post} />
                <Link to='/'><p>Return Home</p></Link>
            </>
        );
    }

}

export default IndividualPost;