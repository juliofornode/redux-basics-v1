import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadComment} from '../actions/index';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(eventObject) {
    this.setState({ comment: eventObject.target.value });
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    const COMMENT = this.state.comment;
    this.props.loadComment(COMMENT);
    this.setState({ comment: '' });
  }

  render() {
    return(
      <div className="comment-box">
        <form onSubmit={this.handleSubmit} className="comment-box">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="6"
              value = {this.state.comment}
              onChange={this.handleChange}
              />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

function mapActionsToProps(dispatch){
  return bindActionCreators({ loadComment: loadComment }, dispatch);
}

CommentBox.propTypes = {
  loadComment: PropTypes.func
};

export default connect(null, mapActionsToProps)(CommentBox);
