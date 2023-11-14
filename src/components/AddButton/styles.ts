import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export const Circle = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variables.green};
  color: #fff;
  position: relative;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-top: 60px;
  margin-left: 65px;
`
