import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default App;
