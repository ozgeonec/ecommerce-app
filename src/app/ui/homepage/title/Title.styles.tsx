import styled from "styled-components";
import * as palette from '../../../variables';
import {device} from "../../../breakpoints";


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
    @media ${device.md} {
      font-size: 18px;
      line-height: 24px;
    }
  }

  p {
    color: ${palette.lightTextColor};
    font-size: 18px;
    line-height: 24px;
    padding-top: 12px;
    @media ${device.md} {
      font-size: 14px;
      line-height: 20px;
      padding-top: 6px;
    }
  }
`