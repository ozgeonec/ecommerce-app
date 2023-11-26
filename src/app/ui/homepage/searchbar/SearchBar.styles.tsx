import styled from "styled-components";
import * as palette from '../../../variables';

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  color: ${palette.lightTextColor};
  align-items: center;

  input {
    background-color: ${palette.whiteColor};
    outline: none;
    border: none;
    color: ${palette.textColor};
    padding: 8px 16px 8px 6px;
    margin-left: 10px;
    border-radius: .3rem;
    &::placeholder{
      color: ${palette.placeholderColor};
    }
}
`