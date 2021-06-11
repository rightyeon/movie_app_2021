import React from 'react';

function Food({name, pic}) { 
  // return <h1>I LIKE { props.fav }</h1>;
  // 구조 분해 할당 (destructuring assignment) 으로 사용하기
  return (
    <div>
      <h2>I LIKE {name}</h2>
      <img src={pic} width="50%" alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name : 'Kimchi',
    image: 'https://www.canceranswer.co.kr/news/photo/202011/1492_2385_3537.jpg',
  },
  {
    id:2,
    name : 'topokki',
    image: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202007/07/img_20200707090644_7ebc248e.webp',
  },
  {
    id:3,
    name : 'potato',
    image: 'https://img-cf.kurly.com/shop/data/goodsview/20201222/gv30000145401_1.jpg',
  }
];


// App 컴포넌트 정의
function App() {
  // 컴포넌트에서 HTML 을 반환
  return  (
    <div>
      <h1>Hello</h1>
      { foodILike.map(dish=>(
        <Food name={dish.name} pic={dish.image} key={dish.id} />
      ))}
    </div>
  );
}

export default App;
