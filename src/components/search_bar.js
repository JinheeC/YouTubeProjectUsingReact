import React, {Component} from 'react';  //Syntatic sugar

// 함수형 컴포넌트 방법
// const SearchBar = () => {
//   return <input/> // 여기에서 react.createElements 를 호출하기 때문에 import react 가 필요하다.
// };

// 클래스 기반 컴포넌트
// 상속도 가능. React.Component class 의 기능을 상속받겠다는 말
class SearchBar extends Component{
// render 이라는 메소드
// SearchBar 를 랜더링 할때 이제 기존의 render 를 사용하지 않고 아래의 render를 사용하게 된다.
  render() {
    //ES6 방식으로 아래처럼도 가능.
    //return <input onChange={event => console.log(event.target.value)}/>;
    return <input onChange={this.onInputChange}/>;
  }

  // 일반적으로 on, handle 을 쓰고 보고싶은 컴포넌트 이름, 그리고 어떤 이벤트에 반응할것인지 순서로 이름을 지어준다.
  // JSX 에 위와같이 이벤트 핸들러를 달아주면 아규먼트로 이벤트에 관한 정보(event context)가 넘어온다.
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
