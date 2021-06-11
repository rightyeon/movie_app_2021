import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(보여줄 컴포넌트, 그려질 위치)
// React는 컴포넌트와 함께 동작하고, 모두 컴포넌트로 구성된다.
ReactDOM.render(
  // ID가 root인 엘리먼트에 App Component를 그린다.
  <App />,document.getElementById('root')
);

 