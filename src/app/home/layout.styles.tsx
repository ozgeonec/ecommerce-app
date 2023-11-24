import styled from "styled-components";
import * as palette from '../variables';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
`

export const UpperSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  padding: 40px 0;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`
export const LoadingIndicator = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 1.2rem;
`
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 50px;
`
export const LoadButton = styled.button`
  width: fit-content;
  background-color: transparent;
  outline: none;
  border: 1px solid ${palette.textColor};
  padding: 12px 20px;
  color: ${palette.textColor};
  cursor: pointer;
  margin-top: 50px;
`