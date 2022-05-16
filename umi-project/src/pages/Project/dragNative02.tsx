import React, { Component } from "react";
import "./index.less";

let list = [];

for (let i = 0; i < 10; i++) {
    list.push(`item ${i}`);
}

export default class dragNative02 extends Component {
    constructor() {
        super();
        this.state = {
            lists: list,
            dragging: false,
            draggingItemIndex: -1,
            startPageY: 0,
            offsetY: 0
        };
    }

    handleMouseDown = (event, index) => {
        this.setState({
            dragging: true,
            draggingItemIndex: index,
            startPageY: event.pageY
        });
    };

    handleMouseUp = (event) => {
        this.setState({
            dragging: false,
            draggingItemIndex: -1,
            startPageY: 0
        });
    };

    move = (arr, startIndex, isMoveDown) => {
        let newArr = arr.slice();
        let moveItem = newArr.splice(startIndex, 1)[0];
        if (isMoveDown) {
            newArr.splice(startIndex + 1, 0, moveItem);
        } else {
            newArr.splice(startIndex - 1, 0, moveItem);
        }
        return newArr;
    };

    handleMouseMove = (event) => {
        console.log(event)
        let offset = event.pageY - this.state.startPageY;
        let draggingIndex = this.state.draggingItemIndex;
        const lineHeight = 39; //通过document.querySelector('.listContainer li').offsetHeight获取
        //move down
        //当移动的item没有超过list的长度， 则每往下移动超过lineHeight，就把数组中数据往后挪一位。相应的draggingItemIndex 和 startPageY都要增加一位。
        if (offset > lineHeight && draggingIndex < this.state.lists.length - 1) {
            offset -= lineHeight;
            this.setState({
                lists: this.move(this.state.lists, draggingIndex, true),
                draggingItemIndex: draggingIndex + 1,
                startPageY: this.state.startPageY + lineHeight
            });
            //当移动的item还是list里面， 则每往上移动超过lineHeight，就把数组中数据往前挪一位。相应的draggingItemIndex 和 startPageY都要减少一位。
        } else if (offset < -lineHeight && draggingIndex > 0) {
            offset += lineHeight;
            this.setState({
                lists: this.move(this.state.lists, draggingIndex, false),
                draggingItemIndex: draggingIndex - 1,
                startPageY: this.state.startPageY - lineHeight
            });
        }

        this.setState({
            offsetY: offset
        });
    };

    getDraggingStyle = (index) => {
        if (index === this.state.draggingItemIndex) {
            return {
                backgroundColor: "#eee",
                transform: `translate(10px, ${this.state.offsetY}px)`,
                opacity: 0.5
            };
        } else {
            return {};
        }
    };

    render() {
        return (
            <div className="listContainer">
                {this.state.lists.map((item, index) => (
                    <li
                        key={item}
                        onMouseDown={(event) => this.handleMouseDown(event, index)}
                        style={this.getDraggingStyle(index)}
                    >
                        {item} <span>index: {index}</span>
                    </li>
                ))}
                {this.state.dragging && (
                    <div
                        // className="coverMask"
                        onMouseUp={(event) => {
                            this.handleMouseUp(event);
                        }}
                        onMouseMove={(event) => {
                            this.handleMouseMove(event);
                        }}
                    />
                )}
            </div>
        );
    }
}
