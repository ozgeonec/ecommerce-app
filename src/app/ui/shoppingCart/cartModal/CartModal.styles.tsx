import styled from "styled-components";
import * as palette from '../../../variables';

export const CartMainWrapper = styled.div`
  position: relative;
  flex: 1;
`

export const LogoWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  border: 2px solid ${palette.textColor};
  border-radius: 6px;
  padding: 4px;
  float: right;
`
export const CartLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`
export const Quantity = styled.p`
  color: ${palette.textColor};
  font-size: 24px;
  line-height: 32px;
  padding-right: 10px;
`

export const CartModalWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 9;
  width: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${palette.bgColor};
  border: 1px solid ${palette.textColor};
  padding: 20px;

`
