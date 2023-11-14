import ContactList from '../../containers/ContactList'
import SideBar from '../../containers/SideBar'

const Home = () => (
  <>
    <SideBar showFilters />
    <ContactList />
  </>
)

export default Home
