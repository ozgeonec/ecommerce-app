import styled from "styled-components";
import * as palette from '../../../variables';

export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;

  p {
    color: ${palette.textColor};
  }
`
export const ModalTitle = styled.h3`
  color: ${palette.textColor};
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 20px;
`

export const ModalImg = styled.img`
  width: 120px;
  height: 120px;
`
export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: ${palette.textColor};
    padding-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: ${palette.lightTextColor};
    padding-bottom: 12px;
  }
`
export const Line = styled.div`
  background-color: ${palette.textColor};
  height: 1px;
  width: 100%;
  margin: 20px 0;
`
export const InnerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const ModalDetails = styled.div`
  display: flex;
  flex-direction: row;

`
export const RemoveButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${palette.textColor};
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
  padding-top: 16px;
`
export const ModalBottom = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalBottomInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-weight: 600;
  }

  span {
    color: ${palette.textColor};
    font-weight: 400;
    font-size: 14px;
  }
`

export const EmptyCart = styled.p`
  padding: 20px 0;
  color: ${palette.lightTextColor} !important;
`