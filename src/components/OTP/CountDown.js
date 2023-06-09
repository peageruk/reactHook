import React, { useEffect, useState } from "react";

const CountDown = (props) => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      props.setIsDisableBtn(true);
      return;
    }

    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count, props]);

  return <div>{count}</div>;
};

export default CountDown;
