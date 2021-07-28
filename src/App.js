import React from 'react';
import PropTypes from 'prop-types';

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
  }
];


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
}

// Food의 모든 props는 문자열이고 반드시 있어야 하는 조건 추가
Food.propTypes = {
  name   : PropTypes.string.isRequired,
  pic    : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired
}

export default App;
