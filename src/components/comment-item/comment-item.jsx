import React, {Component} from "react";
import PropTypes from 'prop-types';


class CommentItem extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        delComment: PropTypes.func.isRequired
    };
    handleClick = () => {
        const {comment, index, delComment} = this.props;
        // 提示
        if (window.confirm(`确定删除${comment.username}的评论吗`)) {
            delComment(index);
        }
    };

    render() {
        return (
              <li className="list-group-item">
                  <div className="handle">
                      <a href="javascript:;" onClick={this.handleClick}>删除</a>
                  </div>
                  <p className="user"><span>{this.props.comment.username}</span><span>说:</span></p>
                  <p className="content">{this.props.comment.content}</p>
              </li>
        )
    }
}


export default CommentItem;
