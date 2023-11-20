import styled, { createGlobalStyle } from 'styled-components'
import { editButton } from '../components/Contact/styles'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  list-style: none;
  color: #fff;

  body {
    background-color: ${variables.darkBlue};
  }
}`
export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${variables.lightBlue};
  }

  &::-webkit-scrollbar-track {
    background-color: #666;
  }
`

export const TextInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border 1px solid ${variables.orange};
  padding: 8px;
  background-color: ${variables.darkBlue};
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`

export const SaveButton = styled(editButton)`
  flex: 1;
  width: 100%;
`
