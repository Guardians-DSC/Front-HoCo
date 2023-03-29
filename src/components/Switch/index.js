import React from 'react'
import usePagesContext from "../../contexts/app.context";
import { InnerBall, Wrapper } from "./style";

export const Switch = () => {
  const { handleTheme } = usePagesContext();

  return (
    <Wrapper onClick={handleTheme}>
      <InnerBall />
    </Wrapper>
  );
};