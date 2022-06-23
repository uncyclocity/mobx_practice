# 💾 MobX 사용하기

> References <br> <a href="https://jforj.tistory.com/154">[React] 함수형 컴포넌트에서 Mobx 사용하기</a> _.J4J_

## 🎛 구조

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkoXNi%2FbtraoBKbF9G%2FnGPXO05vDRx9whXvbyfq90%2Fimg.png">

- **Actions** : Observable State의 데이터를 변화시키는 함수
- **Observable State** : 관찰되고 있는 데이터가 저장되는 곳
- **Compute Values** : 관찰되고 있는 데이터의 변화를 감지하여, 렌더링 등 사이드 이펙트 트리거를 전달함
- **Side Effects** : 렌더링 등의 사이드 이펙트를 실행하고, 이후의 액션 함수가 실행되도록 이벤트를 전달함

## 💻 사용하기

- `src/modules` 디렉토리를 생성하여 아래 파일들을 만든다.

numberStore.js

```javascript
// observable 파일 : state와 액션 함수가 담겨있음
import { observable } from "mobx";

const NumberStore = observable({
    // state
    num: 0,

    // 액션 함수
    increaseAction(num) {
        this.num = this.num + num;
    }

    decreaseAction(num) {
        this.num = this.num - num
    }
});

export default NumberStore;
```

indexStore.js

```javascript
// observable들을 묶어주는 파일
import NumberStore from "./numberStore";

const indexStore = () => ({
  NumberStore,
  // StoreBlah
  // BlahStore
});
export default indexStore;
```

- App.js에서 사용하기

```javascript
import indexStore from "./modules/indexStore";

export default function App() {
  const { NumberStore } = indexStore();

  const increase = () => {
    NumberStore.increaseAction(1);
  };

  const decrease = () => {
    NumberStore.decreaseAction(1);
  };

  return (
    <>
      <p>Num value : {NumberStore.num}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}
```
