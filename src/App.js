import React, { Component } from 'react';
import Post from './components/Post';
import Filter from './components/Filter';
import {posts} from './posts';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blog post populares</h1>
        <Filter />
        {posts.map((post)=>(
          <Post post={post}/>
        ))}

      </div>
    );
  }
}

export default App;
