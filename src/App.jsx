import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Spinner from './components/Spinner/Spinner'
import Footer from './components/Footer/Footer'

function App() {
  const navigation = useNavigation()
  return (
    <>
      <div>
        <Header></Header>
        {navigation.state === 'loading' && <Spinner></Spinner>}
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
