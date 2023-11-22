import styled from "styled-components";

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 4px;
`
export const CartLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`
export const Quantity = styled.p`
  color: #373737;
  font-size: 24px;
  line-height: 32px;
  padding-right: 10px;
`
export const ModalTitle = styled.h3`
  color: #373737;
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 20px;
`
export const CartMainWrapper = styled.div`
  position: relative;
`
export const CartModalWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 9;
  width: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #d4d1d1;
  border: 1px solid #373737;
  padding: 20px;

  p {
    color: #373737;
  }
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
    color: #373737;
    padding-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #353535;
    padding-bottom: 12px;
  }
`
export const Line = styled.div`
  background-color: #373737;
  height: 1px;
  width: 100%;
  margin: 20px 0;
`
export const InnerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: #373737;
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
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
    color: #373737;
    font-weight: 400;
    font-size: 14px;
  }
`