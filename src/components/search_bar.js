import React from 'react';

// 함수형 컴포넌트 방법
// const SearchBar = () => {
//   return <input/> // 여기에서 react.createElements 를 호출하기 때문에 import react 가 필요하다.
// };

// 클래스 기반 컴포넌트
// 상속도 가능. React.Component class 의 기능을 상속받겠다는 말
class SearchBar extends React.Component{
// render 이라는 메소드
// SearchBar 를 랜더링 할때 이제 기존의 render 를 사용하지 않고 아래의 render를 사용하게 된다.
  render() {
    return <input/>;
  }
}

export default SearchBar;
