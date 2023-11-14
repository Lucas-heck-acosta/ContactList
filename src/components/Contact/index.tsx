import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/contacts'
import ContactIconImage from '../../assets/images/contact-icon.png'
import ContactClass from '../../models/Contact'
import { useState } from 'react'
import * as S from './styles'
import { SaveButton } from '../../styles'

type Props = ContactClass

const Contact = ({
  name,
  phone: phoneOriginal,
  email: emailOriginal,
  group,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [phone, setPhone] = useState(phoneOriginal)
  const [email, setEmail] = useState(emailOriginal)

  function cancelEdit() {
    setEditing(false), setPhone(phoneOriginal), setEmail(emailOriginal)
  }
  return (
    <S.Card>
      <S.DeleteButton onClick={() => dispatch(remove(id))}>X</S.DeleteButton>
      <S.ContactIcon src={ContactIconImage} alt="Contact Icon" />
      <S.ContactInfo>
        <S.Name value={editing ? `Editing: ${name}` : name} disabled={true} />
        <S.Phone
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!editing}
          style={editing ? { textDecoration: 'underline' } : {}}
        />
        <S.Email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!editing}
          style={editing ? { textDecoration: 'underline' } : {}}
        />
      </S.ContactInfo>
      {editing ? (
        <S.EditingButtons>
          <S.CancelButton onClick={cancelEdit}>Cancel</S.CancelButton>
          <SaveButton
            onClick={() => {
              dispatch(edit({ name, phone, email, group, id }))
              setEditing(false)
            }}
          >
            Save
          </SaveButton>
        </S.EditingButtons>
      ) : (
        <S.editButton onClick={() => setEditing(true)}>Edit</S.editButton>
      )}
    </S.Card>
  )
}

export default Contact
