import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    // var : ecmascript6에선 더 이상 사용 안함.
    // const : 한번 선언 후 고정적인 값
    // let : 유동적인 값
    const name = "velopert";
    const value = 1;

    return (
      // <Fragment>
      //   <div>안녕하세요.</div>
      //   <div>하이하이</div>
      //   <input type="text" />
      // </Fragment>
      // <div>{1 + 1 === 2 ? <div>맞아요!</div> : <div>틀려요!</div>}</div>
      // <div>{name === "velopert" && <div>벨로퍼트다!</div>}</div>
      <div>
        {//함수를 바로 호출하려면 함수를 ()로 감싸고 ()를 오른쪽에 붙여준다.
        (function() {
          if (value === 1) return <div>1이다</div>;
          if (value === 2) return <div>2이다</div>;
          if (value === 3) return <div>3이다</div>;
          return <div>없다</div>;
        })()}
      </div>
    );
  }
}

export default App;
