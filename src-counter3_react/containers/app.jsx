// 连接 redux
import {connect} from 'react-redux';
import {increase,reduce} from "../redux/actions";
import React from "react";
import Counter from "../components/counter";
export default connect(
    state=>({count:state}), // 父函数会将这两个对象一一结构交给子函数
    {increase,reduce}
)(Counter);
