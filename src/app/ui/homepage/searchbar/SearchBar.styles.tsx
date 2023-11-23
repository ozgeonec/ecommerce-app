import styled from "styled-components";
import * as palette from '../../../variables';

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  input {
    background-color: transparent;
    outline: none;
    border: 1px solid ${palette.textColor};
    color: ${palette.textColor};
    padding: 8px 16px 8px 6px;
  }
  
}
`