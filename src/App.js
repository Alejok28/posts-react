import React, { Component } from 'react';
import Post from './components/Post';
import Filter from './components/Filter';
import { posts } from './posts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts,
      ascending: false,
    }
  this.descendingOrder();
  }

  descendingOrder = () => {
    var items = this.state.posts;
    items.sort((a, b) => {
      if (a.votes < b.votes+1) {
        return 1;
      }
      if (a.votes > b.votes+1) {
        return -1;
      }
      return 0;
    });
    this.setState({
      posts: items,
      ascending: false,
    });
  }

  ascendingOrder = () => {
    var items = this.state.posts;
    items.sort((a, b) => {
      if (a.votes > b.votes-1) {
        return 1;
      }
      if (a.votes < b.votes-1) {
        return -1;
      }
      return 0;
    });
    this.setState({
      posts: items,
      ascending: true,
    });
  }

  voteUp = post => {
    const isAscending = this.state.ascending;
    isAscending ? this.ascendingOrder() : this.descendingOrder();
    const updatedPosts = this.state.posts.map((p) => {
      return p.id === post.id ? Object.assign({}, p, { votes: p.votes + 1 }) : p
    })
    this.setState({
      posts: updatedPosts
    });
  }

  voteDown = post => {
    const isAscending = this.state.ascending;
    isAscending ? this.ascendingOrder() : this.descendingOrder();
    const updatedPosts = this.state.posts.map((p) => {
      return p.id === post.id ? Object.assign({}, p, { votes: p.votes - 1 }) : p
    })
    this.setState({
      posts: updatedPosts
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Blog post populares</h1>
        <Filter
          order={this.state.ascending}
          handleClickBtn1={this.ascendingOrder}
          handleClickBtn2={this.descendingOrder}
        />
        {this.state.posts.map( post => (
          <Post
            key={post.id}
            post={post}
            onClickVoteUp={this.voteUp.bind(this, post)} onClickVoteDown={this.voteDown.bind(this, post)}
          />
        ))}
      </div>
    );
  }
}

export default App;
