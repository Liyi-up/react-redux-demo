/*
   action create 工厂函数
 */
import {ADD_COMMENT, DEL_COMMENT} from "./action-types";

// 同步添加评论
export const addComment = (data) => ({ADD_COMMENT, data});
// 同步删除评论
export const delComment = (data) => ({DEL_COMMENT, data});
