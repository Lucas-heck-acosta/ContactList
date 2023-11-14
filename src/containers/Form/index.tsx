import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, SaveButton, TextInput } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/Group'
import { add } from '../../store/reducers/contacts'

const FormContainer = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [group, setGroup] = useState(enums.Group.ALL)

  const registerContact = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      add({
        name,
        phone,
        email,
        group
      })
    )
    navigate('/')
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <MainContainer>
      <Form onSubmit={registerContact}>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <TextInput
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone"
        />
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <Options>
          <p>Group</p>
          {Object.values(enums.Group).map((group) => (
            <Option key={group}>
              <input
                value={group}
                name="group"
                type="radio"
                id={group}
                defaultChecked={group === enums.Group.ALL}
                onChange={(e) => setGroup(e.target.value as enums.Group)}
              />{' '}
              <label htmlFor="work">{group}</label> <br />
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Register</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default FormContainer
