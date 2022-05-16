# kakao-login-container

## Installation

---

Using npm:

```
npm i kakao-login-container
```

In React

```javascript
// Load component
import { KakaoLoginContainer } from "kakao-login-container";
import React, { useState } from "react";

const KAKAO_API_KEY = "Your Api Key";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <KakaoLoginContainer setUser={setUser} appKey={KAKAO_API_KEY}>
        <button>kakao login</button>
      </KakaoLoginContainer>
    </>
  );
}
```

You can also customize css give style props

```javascript
<KakaoLoginContainer
  style={{ width: 100, height: 100, backgroundColor: "tomato" }}
  setUser={setUser}
  appKey={KAKAO_API_KEY}
>
  <button>kakao login</button>
</KakaoLoginContainer>
```
