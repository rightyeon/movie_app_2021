import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
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
=======
function Food({name, pic, rating}) { 
  // return <h1>I LIKE { props.fav }</h1>;
  // 구조 분해 할당 (destructuring assignment) 으로 사용하기
  return (
    <div>
      <h2>I LIKE {name}</h2>
      <h4>{rating}/⭐️5.0</h4>
      <img src={pic} width="50%" alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name : 'Kimchi',
    image: 'https://www.canceranswer.co.kr/news/photo/202011/1492_2385_3537.jpg',
    rating : 4
  },
  {
    id:2,
    name : 'topokki',
    image: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202007/07/img_20200707090644_7ebc248e.webp',
    rating : 3.9
  },
  {
    id:3,
    name : 'potato',
    image: 'https://img-cf.kurly.com/shop/data/goodsview/20201222/gv30000145401_1.jpg',
    rating:4.5
>>>>>>> 55810ff628fbd9a7e79a93c10e97c86f5cdff385
  }

<<<<<<< HEAD
  componentDidMount() {
    setTimeout(()=> {
      this.setState({ isLoading : false })
    }, 6000);
  }
 
  render() {
    const { isLoading } = this.state;
    return  <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>;
  } 
=======

Food.propTypes = {
  
}


// App 컴포넌트 정의
function App() {
  // 컴포넌트에서 HTML 을 반환
  return  (
    <div>
      <h1>Hello</h1>
      {
        foodILike.map(dish=>(
          <Food name={dish.name} pic={dish.image} key={dish.id} rating={dish.rating} />
        ))
      }
    </div>
  );
>>>>>>> 55810ff628fbd9a7e79a93c10e97c86f5cdff385
}

export default App;
