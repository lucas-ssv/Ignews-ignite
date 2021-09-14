import { useEffect, useState } from "react";

export function Async() {
  const [isButtonInvisable, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>

      {isButtonInvisable && <button>Button</button>}
    </div>
  );
}
