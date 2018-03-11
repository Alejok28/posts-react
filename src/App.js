import React, { Component } from 'react';
import Post from './components/Post';
import Filter from './components/Filter';
import {posts} from './posts';
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

  descendingOrder() {
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

  ascendingOrder() {
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

  voteUp(post) {
    const isAscending = this.state.ascending;
    isAscending ? this.ascendingOrder() : this.descendingOrder();
    const { id, title, description, votes, url, writer_avatar_url, post_image_url } = post;
    let updatedPosts = this.state.posts.map((p,i) => id === p.id ? {id, title, description, votes:(votes + 1), url, writer_avatar_url, post_image_url } : p)

    this.setState({
      posts: updatedPosts
    });

  }
  voteDown(post) {
    const isAscending = this.state.ascending;
    isAscending ? this.ascendingOrder() : this.descendingOrder();
    const { id, title, description, votes, url, writer_avatar_url, post_image_url } = post;
    let updatedPosts = this.state.posts.map((p,i) => id === p.id ? {id, title, description, votes:(votes - 1), url, writer_avatar_url, post_image_url } : p)

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
          handleClickBtn1={this.ascendingOrder.bind(this)} handleClickBtn2={this.descendingOrder.bind(this)}
        />
        {this.state.posts.map((post)=>(
          <Post post={post} onClickVoteUp={this.voteUp.bind(this,post)} onClickVoteDown={this.voteDown.bind(this,post)}/>
        ))}

      </div>
    );
  }
}

export default App;
