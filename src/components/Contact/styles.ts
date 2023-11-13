import styled from 'styled-components'
import variables from '../../styles/variables'

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${variables.lightBlue};
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${variables.red};
  color: #fff;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 8px;
`

export const ContactIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 8px;
`

export const ContactInfo = styled.div`
  text-align: center;
`

export const Name = styled.input`
  margin: 0;
  margin-bottom: 8px;
  font-size: 20px;
  border: none;
  background: none;
  outline: none;
  color: inherit;
  text-align: center;
`

export const Phone = styled.input`
  margin: 0;
  font-size: 14px;
  border: none;
  background: none;
  outline: none;
  color: inherit;
  text-align: center;
`

export const Email = styled.input`
  margin: 0;
  font-size: 14px;
  border: none;
  background: none;
  outline: none;
  color: inherit;
  text-align: center;
`

export const editButton = styled.button`
  margin-top: 16px;
  width: 80%;
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #45a049;
  }
`

export const EditingButtons = styled.div`
  display: flex;
  justify-content: space-between;
  widht: 100%;
`
export const CancelButton = styled(editButton)`
  flex: 1;
  margin-right: 8px;
  background-color: ${variables.red};
  &:hover {
    background-color: #ff4040;
  }
`
export const SaveButton = styled(editButton)`
  flex: 1;
  width: 100%;
`
