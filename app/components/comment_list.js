import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.listComments = this.listComments.bind(this);
  }

  listComments() {
    return this.props.comments.map(comment => {
      return (
        <li key={comment}>{comment}</li>
      );
    });
  }

  render() {
    return(
      <div className="comment-list" style={{marginTop: '50px'}}>
        <ul>
          {this.listComments()}
        </ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
