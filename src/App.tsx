import { Provider } from 'react-redux'
import ContactList from './containers/ContactList'
import SideBar from './containers/SideBar'
import GlobalStyle, { Container } from './styles'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
