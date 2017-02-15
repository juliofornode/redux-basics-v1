import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div style={{margin: '100px'}}>
        <div style={{marginTop: '100px'}}></div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
