import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Spinner from './components/Spinner/Spinner'

function App() {
  const navigation = useNavigation()
  return (
    <>
      <div>
        <Header></Header>
        {navigation.state === 'loading' && <Spinner></Spinner>}
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
