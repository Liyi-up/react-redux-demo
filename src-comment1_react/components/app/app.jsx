import React, {Component} from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list"
import {AppContext} from '../../context/context'

class App extends Component {
    state = {

        comments: []
    };

    componentDidMount() {
        // 模拟发送异步axios请求
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React真好'},
                {username: 'Jack', content: 'Vue真牛'},
            ]
            // 更新状态
            this.setState({
                comments
            })
        }, 1000);
    }


    addComment = (val) => { // 添加评论
        console.log(val);
        let {comments} = this.state;
        comments.unshift(val);
        this.setState({
            comments
        });

    };
    static contextType = AppContext;
    delComment = (index) => { //删除评论
        let {comments} = this.state;
        // 参数一 数组下标 参数二: 0=添加 参数三:代表想要替换掉值
        comments.splice(index, 1);
        this.setState({
            comments
        });
    };

    render() {
        let {comments} = this.state;
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
                    <CommentAdd func={this.addComment}/>
                    <CommentList comments={comments} delComment={this.delComment}/>
                </div>
            </div>
        );

    }
}

export default App;
