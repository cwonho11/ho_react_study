import React, { Component } from 'react'

export default class BoxClass extends Component {

    result = () => {
        if(
            this.props.title === "Computer" &&
            this.props.result !== "tie" &&
            this.props.result !== ""
        ) {
            // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
            return this.props.result === "win" ? "lose" : "win";
        } else {
            // 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
            return this.props.result;
        }
    };

    render() {
        return (
            <div className={`box ${this.result()}`}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.item && this.props.item.name}</h2>
                <img className="item-img" src={this.props.item && this.props.item.img}></img>
                <h2>{this.result}</h2>
            </div>
        )
    }
}
