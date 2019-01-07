import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => {
    return(
        <Link to={`/posts/${props.data.id}`}>
            <div className='individual-post'>
                <h2>{props.data.title}</h2>
                <p>{props.data.contents}</p>
            </div>
        </Link>
    );
}

export default Post;