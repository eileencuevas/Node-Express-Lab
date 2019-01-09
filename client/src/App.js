import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar';
import PostsList from './components/PostsList';
import IndividualPost from './components/IndividualPost';
import QuoteForm from './components/QuoteForm';

const AppDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #4281A4;
`

class App extends Component { 
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

  addQuote = quoteToAdd => {
    axios
        .post('http://localhost:5000/api/posts/', quoteToAdd)
        .then(response => {
            this.setState({ posts: [...this.state.posts, response.data] })
        })
        .catch(error => {
            console.log(error);
        })
}

  render() {
    return (
      <AppDiv>
        <NavigationBar />
        <Route 
          exact path='/' 
          render={props => <PostsList posts={this.state.posts}/>} 
        />
        <Route 
          exact path='/posts/:postId' 
          render={(props) => <IndividualPost {...props} posts={this.state.posts} />}
        />
        <Route 
          exact path='/add' 
          render={props => <QuoteForm {...props} addQuote={this.addQuote}/>} 
        />
      </AppDiv>
    );
  }
}

export default App;
