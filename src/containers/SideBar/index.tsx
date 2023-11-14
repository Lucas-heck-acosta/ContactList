import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/FilterCard'
import { TextInput } from '../../styles'
import * as enums from '../../utils/enums/Group'
import { Aside, Filters } from './styles'
import { searchTerm } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import { SaveButton } from '../../styles/index'
type Props = {
  showFilters: boolean
}
const SideBar = ({ showFilters }: Props) => {
  const { term } = useSelector((state: RootReducer) => state.filter)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Aside>
      {showFilters ? (
        <>
          <TextInput
            type="text"
            placeholder="Search"
            value={term}
            onChange={(event) => dispatch(searchTerm(event.target.value))}
          />
          <Filters>
            <CardFilter group={enums.Group.ALL} />
            <CardFilter group={enums.Group.FAMILY} />
            <CardFilter group={enums.Group.FRIENDS} />
            <CardFilter group={enums.Group.WORK} />
          </Filters>
        </>
      ) : (
        <SaveButton onClick={() => navigate('/')}>Go Back</SaveButton>
      )}
    </Aside>
  )
}

export default SideBar
