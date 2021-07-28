import React from 'react';

class App extends React.Component {


  /*
    == App 클래스는 React.Component 클래스를 상속받는다는 뜻.
    == 클래스형 컴포넌트를 사용하는 이유는 state를 사용하기 위해서임
    == state는 동적 데이터를 다루기 위해 사용함 (+,- 증감 또는 객체의 구성요소의 일부가 있다가 없을 수도 있을 때)
    == 클래스형 컴포넌트가 되려면 리액트가 제공하는 Component 클래스를 반드시 상속받아야 함
    JSX 를 반환하려면 (함수가 아닌 클래스 컴포넌트이기 때문에)
    return 문을 사용할 수 없고,  
    render() 함수를 사용해서 JSX를 반환함
  */
 
  state = {
    isLoading : true,
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({ isLoading : false })
    }, 6000);
  }
 
  render() {
    const { isLoading } = this.state;
    return  <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>;
  } 
}

export default App;
