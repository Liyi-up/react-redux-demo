import React, {Component} from "react";
import PropTypes from 'prop-types';


export default class Counter extends Component {
    state = {
        increment: 1
    };
    static propTypes = {
        count: PropTypes.number.isRequired,
        increase: PropTypes.func.isRequired,
        reduce: PropTypes.func.isRequired
    };
    increase = () => {
        console.log(this.props);
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 2.调用store的方法去更新状态
        this.props.increase(increment);
    };
    change = (event) => {
        const increment = event.target.value;
        this.setState({
            increment
        })
    };
    reduce = () => {
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 2.调用store的方法去更新状态
        this.props.reduce(increment);
    };
    incrementIfOdd = () => {
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 2. 得到原本的值
        const initial = this.props.count;
        // 判断是否满足条件
        if (initial % 2 === 1) {
            this.props.increase(increment);
        }
    };
    incrementIfAsync = () => {
        // 1.得到选择的增量值
        const increment = this.state.increment * 1;
        // 3. 使用延迟定时器模拟异步更新
        setTimeout(() => {
            this.props.increase(increment);

        }, 1000);


    };

    render() {
        const {count} = this.props;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <button onClick={this.increase}>+</button>
                    <select onChange={this.change} value={this.state.increment}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.reduce}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if add</button>
                    <button onClick={this.incrementIfAsync}>increment async</button>
                </div>
            </div>
        );
    }
}

