import styled from "styled-components";
import * as palette from '../../../variables';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  text-align: left;
  flex: 1;

  h1 {
    color: ${palette.textColor};
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    cursor: pointer;
  }

  p {
    color: ${palette.lightTextColor};
    font-size: 18px;
    line-height: 24px;
    padding-top: 12px;
  }
`