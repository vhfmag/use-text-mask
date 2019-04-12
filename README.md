# useTextMask

A tiny (>1kb) React hook wrapper around [`vanilla-text-mask`](https://npm.im/vanilla-text-mask).

## Usage

> Make sure to have installed `react` (16.8 or greater) and `vanilla-text-mask` (5 or greater).

```jsx
import React from "react";
import { useTextMask } from "use-text-mask";

const phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export default function App() {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();
  useTextMask(inputRef.current, { mask });

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={value}
        onChange={ev => setValue(ev.target.value)}
      />
    </div>
  );
}
```

To learn about the options that can be passed to `vanilla-text-mask`, see [its documentation](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme).
