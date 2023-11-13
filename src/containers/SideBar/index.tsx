import CardFilter from '../../components/FilterCard'
import { TextInput } from '../../styles'
import { Aside, Filters } from './styles'

const SideBar = () => {
  return (
    <Aside>
      <TextInput type="text" />
      <Filters>
        <CardFilter text="all" counter={3} />
        <CardFilter text="family" counter={2} />
        <CardFilter text="work" counter={1} />
        <CardFilter text="friends" counter={0} active />
      </Filters>
    </Aside>
  )
}

export default SideBar
