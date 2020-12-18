/*
   action create 工厂函数
 */
import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENT} from "./action-types";

// 同步添加评论
export const addComment = (data) => ({type: ADD_COMMENT, data});
// 同步删除评论
export const delComment = (data) => ({type: DEL_COMMENT, data});
// 同步接收comment
export const receiveComment = (data) => ({type: RECEIVE_COMMENT, data})
// 异步从后台获取数据
export const getComment = () => {
    return dispatch => {
        // 模拟发送ajax请求异步获取数据
        setTimeout(() => {
            const initComments = [
                {username: 'Tom', content: 'React很不错！'},
                {username: 'Jack', content: 'React太难了！'},
            ];
            // 分发一个同步action
            dispatch(receiveComment(initComments))
        }, 1000)
    };
}
