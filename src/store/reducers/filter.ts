import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Group'
type FilterState = {
  term?: string
  group?:
    | enums.Group.ALL
    | enums.Group.FAMILY
    | enums.Group.FRIENDS
    | enums.Group.WORK
}

const initialState: FilterState = {
  term: '',
  group: enums.Group.ALL
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.group = action.payload.group
    }
  }
})

export const { searchTerm, changeFilter } = filterSlice.actions
export default filterSlice.reducer
