import React, {Component} from 'react';  //Syntatic sugar

// 함수형 컴포넌트 방법
// const SearchBar = () => {
//   return <input/> // 여기에서 react.createElements 를 호출하기 때문에 import react 가 필요하다.
// };

// 클래스 기반 컴포넌트
// 상속도 가능. React.Component class 의 기능을 상속받겠다는 말
class SearchBar extends Component{
  constructor(props){
    super(props); // 상위클래스 호출

    // 클래스기반 컴포넌트마다 state 가 존재한다. 여기서는 그 state 를 다른 값으로 초기화 했다.
    // 초기화는 this.state = , 값을 바꾸려면 this.setState() 메소드를 사용하면 된다.
    // this.state.term 은 값을 참조할 때나 사용해야 한다. setState() 로 상태가 바뀌는 것을 리엑트에게 알려주자.
    this.state = {term: ''};
  }

// render 이라는 메소드
// SearchBar 를 랜더링 할때 이제 기존의 render 를 사용하지 않고 아래의 render를 사용하게 된다.
  render() {
    //return <input onChange={event => console.log(event.target.value)}/>;
    //ES6 방식으로 아래처럼도 가능.
    //return <input onChange={this.onInputChange}/>;
    // JSX 에서는 값을 참조할때 {} 를 사용한다.
    return (
      <div>
        <input
          value={this.state.term} // 이 줄을 추가하면 완전 반대 방향이 된다. 이게 없으면 input 폼의 값이 setState로 State를 변경했지만
          // value 로 인해서 상태가 input 즉 제어 폼 요소한테 너의 값은 내 상태에 달려있어. 내 값을 랜더링 해. 의미가 되어버림.
          // 유저가 input에 값을 입력하면 input 폼의 값이 변하는게 아니라 상태가 변하는 것이다!!
          // react 가 데이터를 다루는 방식.
          onChange={event => this.setState({term: event.target.value})}/>
        <br/>
        입력된 값: {this.state.term}
      </div>
    );
  }

  // 일반적으로 on, handle 을 쓰고 보고싶은 컴포넌트 이름, 그리고 어떤 이벤트에 반응할것인지 순서로 이름을 지어준다.
  // JSX 에 위와같이 이벤트 핸들러를 달아주면 아규먼트로 이벤트에 관한 정보(event context)가 넘어온다.
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
