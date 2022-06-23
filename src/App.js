import React from "react";
import { useObserver } from "mobx-react";
import indexStore from "./modules/indexStore";

function App() {
  const { NumberStore } = indexStore();

  const onClickIncrease = () => {
    NumberStore.increaseAction(1);
  };

  const onClickDecrease = () => {
    NumberStore.decreaseAction(1);
  };

  return useObserver(() => (
    <div>
      <p>now value : {NumberStore.num}</p>
      <button onClick={onClickIncrease}>증가</button>
      <button onClick={onClickDecrease}>감소</button>
    </div>
  ));
}

export default App;
