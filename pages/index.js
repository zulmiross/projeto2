import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  function handleAddCount(){
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Projeto 2</h1>
      <p>{count}</p>
      <button onClick={handleAddCount}>Adicionar +1</button>      
    </div>
  );
}
