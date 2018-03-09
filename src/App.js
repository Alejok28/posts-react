import React, { Component } from 'react';
import {posts} from './posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blog post populares</h1>
        {posts.map((post) => {
          return (
            <div id={post.id}>
              <img alt={post.title} src={post.url}/>
              <p>{post.description}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
