import * as S from './styles'
import ContactIconImage from '../../assets/images/contact-icon.png'
import { useState } from 'react'

const contactData = {
  id: 1,
  name: 'John Doe',
  phone: '123-456-7890',
  email: 'john.doe@example.com'
}
type Props = {
  name: string
  phone: string
  email: string
}

const Contact = ({ name, phone, email }: Props) => {
  const [editing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.DeleteButton>X</S.DeleteButton>
      <S.ContactIcon src={ContactIconImage} alt="Contact Icon" />
      <S.ContactInfo>
        <S.Name readOnly defaultValue={name} />
        <S.Phone readOnly defaultValue={phone} />
        <S.Email readOnly defaultValue={email} />
      </S.ContactInfo>
      {editing ? (
        <S.EditingButtons>
          <S.CancelButton onClick={() => setEditing(false)}>
            Cancel
          </S.CancelButton>
          <S.SaveButton>Save</S.SaveButton>
        </S.EditingButtons>
      ) : (
        <S.editButton onClick={() => setEditing(true)}>Edit</S.editButton>
      )}
    </S.Card>
  )
}

export default Contact
