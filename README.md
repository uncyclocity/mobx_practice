# ๐พ MobX ์ฌ์ฉํ๊ธฐ

> References <br> <a href="https://jforj.tistory.com/154">[React] ํจ์ํ ์ปดํฌ๋ํธ์์ Mobx ์ฌ์ฉํ๊ธฐ</a> _.J4J_

## ๐ ๊ตฌ์กฐ

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkoXNi%2FbtraoBKbF9G%2FnGPXO05vDRx9whXvbyfq90%2Fimg.png">

- **Actions** : Observable State์ ๋ฐ์ดํฐ๋ฅผ ๋ณํ์ํค๋ ํจ์
- **Observable State** : ๊ด์ฐฐ๋๊ณ  ์๋ ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋๋ ๊ณณ
- **Compute Values** : ๊ด์ฐฐ๋๊ณ  ์๋ ๋ฐ์ดํฐ์ ๋ณํ๋ฅผ ๊ฐ์งํ์ฌ, ๋ ๋๋ง ๋ฑ ์ฌ์ด๋ ์ดํํธ ํธ๋ฆฌ๊ฑฐ๋ฅผ ์ ๋ฌํจ
- **Side Effects** : ๋ ๋๋ง ๋ฑ์ ์ฌ์ด๋ ์ดํํธ๋ฅผ ์คํํ๊ณ , ์ดํ์ ์ก์ ํจ์๊ฐ ์คํ๋๋๋ก ์ด๋ฒคํธ๋ฅผ ์ ๋ฌํจ

## ๐ป ์ฌ์ฉํ๊ธฐ

- `src/modules` ๋๋ ํ ๋ฆฌ๋ฅผ ์์ฑํ์ฌ ์๋ ํ์ผ๋ค์ ๋ง๋ ๋ค.

numberStore.js

```javascript
// observable ํ์ผ : state์ ์ก์ ํจ์๊ฐ ๋ด๊ฒจ์์
import { observable } from "mobx";

const NumberStore = observable({
    // state
    num: 0,

    // ์ก์ ํจ์
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
// observable๋ค์ ๋ฌถ์ด์ฃผ๋ ํ์ผ
import NumberStore from "./numberStore";

const indexStore = () => ({
  NumberStore,
  // StoreBlah
  // BlahStore
});
export default indexStore;
```

- App.js์์ ์ฌ์ฉํ๊ธฐ

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
