import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // useEffect(() => {});=>콜백함수
  // useEffect(() => {
  //   console.log("마운트 및 업데이트 될때 실행");
  // });

  // useEffect(() => {
  //   console.log("마운트될때만 실행");
  // }, []);

  useEffect(() => {
    console.log("num값이 변경될때 실행");
    return () => {
      console.log("cleanup 함수");
    };
  }, [num]);

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default App;

// *useEffect(()=>{},[])
// =>mount: 첫 렌더링
// =>update: 리 렌더링
// =>unMount: 화면에서 사라질때(삭제)
// =>콜백함수: 렌더링이 되거나 리 랜더가 되었을때 실행됨
// =>deps: 화면에 첫 랜더링 될때 또는 값이 변경될 때 실행
// 빈 배열로 작성시 화면에 첫 랜더링 될때만 실행됨

// 리액트를 시작하는건 재료가 있지만 아직 실행이 안된 것,
// 재료(api,data)를 가지고 온 후 작업을 시작할 수 있다.
