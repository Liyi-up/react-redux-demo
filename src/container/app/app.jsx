import React, {Component} from "react";
import CommentAdd from "../../components/comment-add/comment-add";
import CommentList from "../../components/comment-list/comment-list"
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addComment,delComment} from '../../redux/action'
class App extends Component {
    static propsTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        delComment: PropTypes.func.isRequired
    }

    render() {
        let {comments, addComment, delComment} = this.props;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd func={addComment}/>
                    <CommentList comments={comments} delComment={delComment}/>
                </div>
            </div>
        );

    }
}

export default connect(
    state=>({comments:state.comments}),
    {addComment,delComment}
)(App);
