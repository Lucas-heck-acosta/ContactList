import styled from 'styled-components'
import variables from '../../styles/variables'

export const Form = styled.form`
  max-width: 560px;
  padding: 10px;
  width: 100%;
  background-color: ${variables.lightBlue};
  font-weight: bold;
  font-size: 14px;
  input {
    margin: 8px 0;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }
  label {
    margin-right: 8px;
  }
`

export const Option = styled.div`
  text-transform: capitalize;
`
