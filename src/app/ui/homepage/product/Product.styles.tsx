import styled from 'styled-components'
import * as palette from '../../../variables';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${palette.whiteColor};
  padding: 20px;
  border-radius: .5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

  &:nth-child(3n+3) {

  }
`
export const BgImage = styled.div`
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-bottom: 50%;
  padding-top: 50%;
  border-radius: .5rem;
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

export const DefaultButton = styled.button`
  background-color: ${palette.buttonColor};
  border: none;
  padding: 18px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: .5rem;

  &:hover {
    background-color: ${palette.buttonColorHover};
  }
`