import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Group'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'Pedro',
      phone: '333-444-1234',
      email: 'pedro@example.com',
      group: enums.Group.FRIENDS,
      id: 1
    },
    {
      name: 'Mom',
      phone: '123-456-7890',
      email: 'mom@example.com',
      group: enums.Group.FAMILY,
      id: 2
    },
    {
      name: 'Dad',
      phone: '111-232-1234',
      email: 'dad@example.com',
      group: enums.Group.FAMILY,
      id: 3
    },
    {
      name: 'Garry',
      phone: '242-999-0421',
      email: 'company@boss.com',
      group: enums.Group.WORK,
      id: 4
    }
  ]
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContact >= 0) {
        state.itens[indexContact] = action.payload
      }
    }
  }
})

export const { remove, edit } = contactsSlice.actions
export default contactsSlice.reducer
