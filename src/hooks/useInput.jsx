import { useState } from "react";

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onchange = (e) => {
    setValue(e.target.value);
  };

  return [{ value, onchange, setValue }];
};

export default useInput;
