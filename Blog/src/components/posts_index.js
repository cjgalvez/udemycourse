import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import _ from 'lodash';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, ((post, key) => {
      console.log("Post:", key);
      return(
        <li className="list-group-item" key={key}>
          <Link to={"posts/" + key}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    }));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({ fetchPosts }, dispatch);
//}

function mapStateToProps(state) {
  console.log("State:", state);
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
