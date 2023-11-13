import styled from 'styled-components'

export const Grid = styled.ul`
  list-style: none;
  padding-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three cards per row */
  gap: 16px; /* Adjust the gap between cards as needed */
`
