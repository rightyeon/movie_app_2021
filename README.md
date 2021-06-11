# 🎬 Movie Review App 으로 리액트 공부하기

## 리액트에서 중요한 3가지 개념
### ✅ 컴포넌트
#### : 컴포넌트 작성시 컴포넌트의 이름은 대문자로 시작해야 한다.
#### : 리액트는 최종적으로 단 한개의 컴포넌트를 그려야 한다 (App)
#### : JSX 로 반환할 값 작성
#### ``` (return <h3>I LIKE 떡볶이</h3>)  ```
#### : 1) 다른 컴포넌트를 불러오려면 App 컴포넌트에 다른 컴포넌트를 Import 하면 된다.
#### : 2) 또는 App 컴포넌트에 function 으로 컴포넌트를 정의해준다.
#### : 컴포넌트 그릴 시 map 함수를 이용해서 그리는 것이 효율적이다.
### ✅ JSX (HTML+JS)
### ✅ Props
#### : 컴포넌트 -> 컴포넌트로 전달하는 데이터
#### : props에 있는 데이터는 문자열인 경우를 제외하면 모두 {} 로 값을 감싸야 한다.
#### ```<Food fav="toppoki" somthing={true} papapa={['hello',1,2,3,4,true]}/> ```
#### : props를 컴포넌트에 전달하면, 컴포넌트는 인자로 props를 받는다.
#### : 전달받은 props의 값을 출력하고 싶다면 { props.name } 으로 출력한다.
