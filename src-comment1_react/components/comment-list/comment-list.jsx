import React, {Component} from "react";
import PropTypes from 'prop-types';
import CommentItem from '../comment-item/comment-item'

class CommentList extends Component {
    static state = {
        delComment: PropTypes.func.isRequired
    };

    render() {
        let {comments} = this.props;
        // 根据评论列表数组长度来判断是否显示提示
        const display = comments.length === 0 ? 'block' : 'none';
        console.log(comments);
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复:</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论</h2>
                <ul className="list-group">
                    {
                        comments.map((item, index) => {
                            return <CommentItem comment={item} key={index} index={index} delComment={this.props.delComment}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;
