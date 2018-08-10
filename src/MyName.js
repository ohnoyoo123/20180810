import React, { Component } from "react";

class MyName extends Component {
  // 기본값 설정(신버전)
  static defaultProps = {
    name: "123",
    name1: "하나둘셋"
  };
  render() {
    return (
      <div>
        안녕하세요 제 이름은 <b>{this.props.name}</b>입니다.<br />
        안녕하세요 제 이름은 <b>{this.props.name1}</b>입니다.<br />
      </div>
    );
  }
}
// 기본값 설정 (구버전)
MyName.defaultProps = {
  name: "치킨",
  name1: "피자"
};

//함수형 컴포넌트
const MyName1 = ({ name }) => {
  return <div> 안녕하세요! 제 이름은 {name} 입니다1.</div>;
};

MyName1.defaultProps = {
  name: "왕주"
};
export default MyName1;
