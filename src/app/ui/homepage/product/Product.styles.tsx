import styled from 'styled-components'
import * as palette from '../../../variables';


export const DefaultButton = styled.button`
  background-color: ${palette.buttonColor};
  border: none;
  padding: 18px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: ${palette.buttonColorHover};
  }
`
export const Wrapper = styled.div`
  width: 33.3%;
  padding-right: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  &:nth-child(3n+3) {
    padding-right: 0;
  }
`
export const BgImage = styled.div`
  width: 100%;
  position: relative;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 300px;
`

export const Description = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255, .7);
  text-align: center;
  position: absolute;
  bottom: 0;

  p {
    color: ${palette.textColor};
    padding: 10px;
    opacity: 1;
  }
`

export const BrandName = styled.p`
  width: 100%;
  text-align: left;
  color: ${palette.textColor};
  padding: 16px 0;
  font-weight: 600;
`

