import React from 'react'; // 설치한 npm 파일에서 react 를 가져와.
import ReactDom from 'react-dom';

// 새 컴포넌트를 만들고 이 컴포넌트는 HTML 파일로 만들어 줘.
// const App = function () { ~ 과 아래는 같은 코드이다.
const App = () => { // class 형태에 해당된다.
  return <div> Hi! </div>; //html 처럼 보이는 이 부분은 JSX 라고 하는데  부분적인 템플릿, 혹은 변형된 자바스크립트라고 보면된다.
}
//<App/> //태그를 self closing 한 App 객체
// 이 컴포넌트로 생성된 HTML 을 가져가서 페이지(DOM) 에 넣어줘.
// index.html 에 있는 container 라는 id 또는 class 를 가진 div 에 들어가게 된다.
// 좀더 상세히 얘기하자면 App 객체가 가지는 div 들은 자식 div 로 들어가게된다.
ReactDom.render(<App/>, document.querySelector('.container'));
