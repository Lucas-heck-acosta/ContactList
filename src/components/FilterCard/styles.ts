import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active: boolean
}

export const Card = styled.div<Props>`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? variables.orange : '#fff')};
  color: ${(props) => (props.active ? variables.orange : '#fff')};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    justify-content: center;
    max-width: 50%;
  }
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: inherit;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Label = styled.span`
  color: inherit;
  font-size: 24px;
`
