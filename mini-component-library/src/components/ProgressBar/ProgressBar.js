/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    width: 250,
  },
  medium: {
    width: 375,
  },
  large: {
    width: 500,
  },
};

const ProgressBar = ({ value, size }) => {
  const Wrapper = styled.div`
    background-color: ${COLORS.gray50};
    width: ${SIZES[size].width}px;
    height: ${SIZES[size].width / 10}px;
    border-radius: ${SIZES[size].width / 10}px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  `;

  const Progress = styled.div`
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
  `;

  return (
    <Wrapper>
      <Progress />
    </Wrapper>
  );
};

export default ProgressBar;
