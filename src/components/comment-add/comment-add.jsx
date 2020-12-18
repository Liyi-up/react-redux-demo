import React, {Component} from "react";
import PropTypes from 'prop-types';

class CommentAdd extends Component {
    state = {
        username: '',
        content: ''
    };
    // 绑定事件
    addClick = () => {
        // 1.收集数据
        let comment = {username: '', content: ''};
        comment.username = this.state.username;
        comment.content = this.state.content;
        this.props.func(comment);
        this.emptyFrom();
    };
    emptyFrom = () => {
        this.setState({
            username: '',
            content: ''
        })

    };
    nameChange = (event) => { //username值监听
        console.log(event.target.value);
        let username = event.target.value;
        this.setState({
            username,
        })
    };

    contentChange = (event) => {
        let content = event.target.value;
        this.setState({
            content,
        })
    };

    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                               value={this.state.username} onChange={this.nameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea rows="6" className="form-control" placeholder="评论内容..." value={this.state.content}
                                  onChange={this.contentChange}/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addClick}>提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

CommentAdd.propsType = {
    func: PropTypes.func.isRequired
};

export default CommentAdd;
